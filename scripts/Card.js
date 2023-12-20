'use strict';
/**
 * Created by jdsul on 12/28/2016.
 */

export class Card {
    constructor(suit, value)
    {
        this.rank = value.rank;
        this.name = value.name;
        this.suit = suit;
    }
}
