/* jasmine specs for controllers go here */
import { Card } from '../../scripts/Card.js';
describe('Card Test', function() {
   it("takes as suit and a value and returns a card", function(){
       const suit = 'hearts',
           values = {
                rank : 12,
                name : 'queen'
            },
           card = new Card(suit, values);

       expect(card.name).toEqual('queen');
       expect(card.rank).toEqual(12);
       expect(card.suit).toEqual('hearts');
   });
});
