/**
 * Created by jdsul on 12/28/2016.
 */
import Card from './Card.js';
import Deck from './Deck.js';
import Player from "./Player.js";
export default class Game {
    //so I need a number of player classes.
    constructor(players) {
        this.winnings = [];    //these go into a round winner's pile
        this.tie = [];         //holder for ties.
        this.inPlay = [];      //array of the currently 'in play' cards
        this.playersList = players;
        this.roundsCount = 0;  //these are for analysis
    }

    playerCyclePiles(player) {
        if (player.drawDeck.deck.length === 0 && player.pile.length > 0) {
            player.cycle();
        }
    }

    victoryAchieved() {
        let tempList = [];
        this.playersList.forEach(function (player) {
            if (player.canPlay()) {
                tempList.push(player);
            }
        });
        this.playersList = tempList;
        return (this.playersList.length > 1);
    }

    round(runOffs) {
        let players;
        //overload the function to handle a passed set of players or the table
        if (arguments.length === 1) {
            players = runOffs;
        } else {
            players = this.playersList;
            this.roundsCount++;
        }

        let leader = {
            player: null
        };

        //can each player make a play?
        players.forEach((player, index)=> {
            let card;
            if (player.canPlay()) {    //player has cards to play

                if (player.drawDeck.deck.length === 0) { //if deck = 0 then cycle
                    this.playerCyclePiles(player);
                }

                card = player.drawDeck.dealOne();

                this.inPlay.push({
                    player: index,
                    card: card
                });
            }
        });

        //analyse cards winner?
        this.inPlay.forEach( (card) => {
            //current leader wins against card
            if (leader.player === null) {
                leader.player = card.player;
                leader.card = card.card;

            } else if (leader.card.values.value < card.card.values.value) {
                this.winnings.push(leader.card); //push the old card //move the losing card into the cardsPool
                leader.player = card.player; //make a new leader
                leader.card = card.card;

                if (this.tie.length) {//reset a tie since we have a higher card and lower card ties don't matter.
                    this.tie = [];
                }
            }
            //leader ties
            else if (leader.card.values.value === card.card.values.value) { //what is with that syntax? card.card.values.value?
                //copy into tie
                this.tie.push(leader, card);
            }
            //leader wins
            else {
                this.winnings.push(card.card);
            }
        });
        if (this.tie.length) {
            //push the tied cards into the cardsPool.
            this.inPlay = [];
            this.resolveTie();
        } else {
            //push wining card into cardsPool
            this.winnings.push(leader.card);
            this.winnings.forEach(  (card) => {
                players[leader.player].pile.push(card);
            });
            this.winnings = [];
            this.inPlay = [];
        }
    }

    resolveTie() {
        //get the players who tied;
        //push the tied cards into the winnings;

        // pass the short list of players back to round.
        var runOffs = [];
        this.tie.forEach(function (tied) {
            //check the deck length for another card.
            // getting kind of sloppy here

            runOffs.push(this.players[tied.player])
        });
        //push the cards into the victory pool
        this.tie.forEach(function (tied) {
            this.winnings.push(tied.card);
        });
        this.tie = [];
        //do the analysis for a player lacking a next card.
        this.round(runOffs);
    };

    run() {
        do {
            this.round();
        }
        while (this.victoryAchieved());
        alert("After " + this.roundsCount + " rounds, the Winner is " + this.playersList[0].name);

    }
}
