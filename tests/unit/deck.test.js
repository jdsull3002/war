"use strict";
/**
 * Created by jdsul on 12/28/2016.
 */

import { Deck } from '../../scripts/Deck.js';
describe('deck', function(){

    const dataSource = {
            "suits":[
                "hearts", "clubs", "diamonds", "spades"
            ],
            "ranks":[
                {   "name": "ace",
                    "rank": 14
                },
                {   "name": "two",
                    "rank": 2
                },
                {   "name": "three",
                    "rank": 3
                },
                {   "name": "four",
                    "rank": 4
                }
            ]
        };
        let testDeck;

        beforeEach(function(){
            testDeck = new Deck(dataSource);
        });

        it('should return a deck', function(){
            expect(testDeck.length()).toEqual(16);
        });

        it('should return the top card', function(){
            let drawnCard = testDeck.dealOne();
            expect(drawnCard.suit).toEqual('hearts');
            expect(drawnCard.name).toEqual('ace');
            expect(drawnCard.rank).toEqual(14);

        });

        it('should throw an error when already populated', function(){
            expect(function(){testDeck.populate(dataSource)}).toThrow( new Error("Already populated"));
        })

})
