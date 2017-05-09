/**
 * Created by jdsul on 12/28/2016.
 */
function Game(players){
    var winnings=[],//these go into a round winner's pile
        tie = [],//holder for ties.
        inPlay = [],//array of the currently in play cards
        playersList = players,
        roundsCount = 0,//these are for analysis

        playerCyclePiles = function(player){
            if(player.drawDeck.deck.length === 0 && player.pile.length > 0){
                player.cycle();
            }
        },

        victoryAchieved = function () {
            var tempList = [];
            playersList.forEach(function(player, index) {
                if (player.canPlay()) {
                    tempList.push(player);
                }
            });
            playersList = tempList;
            return (playersList.length > 1);
        },

        round = function (runOffs) {
            //overload the function to handle a passed set of players or the table
            if (arguments.length=== 1) {
                players = runOffs;
            }else{
                players = playersList;
                roundsCount++;
            }

            var leader = {
                player: null
            };
            //can each player make a play?
            players.forEach(function(player, index){
                var card;
                if(player.canPlay()){//player has cards to play
                    if(player.drawDeck.deck.length === 0){//if deck = 0 then cycle
                        playerCyclePiles(player);
                    }
                    var card = player.drawDeck.dealOne();

                    inPlay.push({
                        player:index,
                        card:card
                    });
                }
            });

            //analyse cards winner?
            inPlay.forEach(function(card){
                //current leader wins against card
                if(leader.player=== null ){
                    leader.player= card.player;
                    leader.card = card.card;

                }else if(leader.card.values.value < card.card.values.value){
                    winnings.push(leader.card); //push the old card //move the losing card into the cardsPool
                    leader.player= card.player; //make a new leader
                    leader.card = card.card;

                    if(tie.length){//reset a tie since we have a higher card and lower card ties don't matter.
                        tie=[];
                    }
                }
                //leader ties
                else if(leader.card.values.value === card.card.values.value){
                    //copy into tie
                    tie.push(leader, card);
                }
                //leader wins
                else{
                    winnings.push(card.card);
                }
            });
            if(tie.length){
                //push the tied cards into the cardsPool.
                inPlay = [];
                resolveTie();
            }else{
                //push wining card into cardsPool
                winnings.push(leader.card);
                winnings.forEach(function(card){
                    players[leader.player].pile.push(card);
                });
                winnings = [];
                inPlay= [];
            };
        },

        resolveTie = function(){
            //get the players who tied;
            //push the tied cards into the winnings;

            // pass the short list of players back to round.
            var runOffs=[];
            tie.forEach(function(tied){
                //check the deck length for another card.
                // getting kind of sloppy here

                runOffs.push(players[tied.player])
            });
            //push the cards into the victory pool
            tie.forEach(function(tied){
                winnings.push(tied.card);
            });
            tie=[];
            //do the analysis for a player lacking a next card.
            round(runOffs);
        };
    do {
        round();
    }
    while (victoryAchieved());
    alert("After " + roundsCount + " rounds, the Winner is "+ playersList[0].name);
}