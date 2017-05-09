/**
 * Created by jdsul on 12/28/2016.
 */
//deck is a collection of Cards
class Deck
{
    constructor(dataSource){
        this.deck=[];
        this.length= ()=> {return this.deck.length;};
        if(dataSource){
            this.populate(dataSource);
        }
    }

    shuffle() {
        // Fisher-Yates (aka Knuth) Shuffle. http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
        for (var i = this.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = temp;
        }
    }
    dealOne() {
        if (this.deck.length > 0) {
            return this.deck.shift();
        }
    }
    populate(dataSource){
        //creates a deck of cards in order.
        //try {
            if(!this.length()) {
                for(var s=0; s < dataSource.suits.length; s++){//suits
                    for(var v=0; v < dataSource.values.length; v++){//values
                        //add cards to the deck
                        this.deck.push(new Card(dataSource.suits[s], dataSource.values[v]));
                    }
                }

            }else{
                throw new Error("Already populated");
            }
        //}
        //catch(error){
       //     alert('The deck was already populated.')
       // }
    }

}