/**
 * Created by jdsul on 12/28/2016.
 */
import  Deck from './Deck.js'
export default class Player {
    constructor(index){
        this.drawDeck = new Deck();
        this.pile = [];
        this.name = 'Player '+ index;
    }
    canPlay = function(){
        return (this.drawDeck.deck.length || this.pile.length) > 0;
    }
    cycleCards = function(){
        //push the pile into the drawPile then shuffle
        this.drawDeck.deck = this.pile;
        this.pile = [];
        this.drawDeck.shuffle();
    }
}
