'use strict';
/**
 * Created by jdsul on 12/28/2016.
 */

import { Card }  from './Card.js';

//deck is a collection of Cards
export class Deck {
    constructor(dataSource){
        this.deck=[];
        this.length= () => this.deck?.length;
        if(dataSource){
            this.populate(dataSource);
        } else {
            this.populate({
                "suits":[
                    "hearts", "clubs", "diamonds", "spades"
                ],
                "ranks":[
                    { "name": "ace",
                        "rank": 14
                    },
                    { "name": "two",
                        "rank": 2
                    },
                    { "name": "three",
                        "rank": 3
                    },
                    { "name": "four",
                        "rank": 4
                    },
                    { "name": "five",
                        "rank": 5
                    },
                    { "name": "six",
                        "rank": 6
                    },
                    { "name": "seven",
                        "rank": 7
                    },
                    { "name": "eight",
                        "rank": 8
                    },
                    { "name": "nine",
                        "rank": 9
                    },
                    { "name": "ten",
                        "rank": 10
                    },
                    { "name": "jack",
                        "rank": 11
                    },
                    { "name": "queen",
                        "rank": 12
                    },
                    { "name": "king",
                        "rank": 13
                    }
                ]
            })
        }
    }

    shuffle() {
        // Fisher-Yates (aka Knuth) Shuffle. http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
        for (var i = this.length() - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = temp;
        }
    }

    dealOne() {
        if (this.length() > 0) {
            return this.deck.shift();
        }
    }

    populate(dataSource){
        //creates a deck of cards in order.
        debugger;
        if(!this.length() ) {
            for(var s=0; s < dataSource.suits.length; s++){//suits
                for(var v=0; v < dataSource.ranks.length; v++){//values
                    //add cards to the deck
                    this.deck.push(new Card(dataSource.suits[s], dataSource.ranks[v]));
                }
            }

        }else{
            throw new Error("Already populated");
        }
    }

}
