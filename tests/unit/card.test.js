/* jasmine specs for controllers go here */
describe('Card Test', function() {
   it("takes as suit and a value and returns a card", function(){
       var suit = 'hearts',
           values = {
                rank : 12,
                name : 'queen'
            };
       var card = new Card(suit, values);

       expect(card.name).toEqual('queen');
       expect(card.rank).toEqual(12);
       expect(card.suit).toEqual('hearts');


   });
});
