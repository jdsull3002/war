/**
 * Created by jdsul on 12/28/2016.
 */
class War{
    constructor(){
        this.numberOfPlayers;
        this.numberOfRanks;
        this.numberOfSuits;

        var game = new Game()
    }
    getNumberOfPlayers=function(){

    }
    getNumberOfRanks = function(){}
    getNumberOfSuits = function(){}

}
// function War(){
//                try{
//                 var players = (function(numberOfPlayers){
//                         var numberOfPlayers = prompt("Number of players (between 2 & 4 at this stage)", 4);
//                         numberOfPlayers = parseInt(numberOfPlayers, 10);
//
//                 if(2 <= numberOfPlayers && numberOfPlayers <= 4){
//                     var tempArray = [];
//                     for(var i=0; i < numberOfPlayers; i++){
//                         tempArray.push(new Player(i+1));
//                     }
//                     return tempArray;
//                 }else{
//                     return
//                 }
//             }()),
//             startingDeck,
//             makeDeck = function () {
//                 var deck = new MainDeck();
//                 deck.populate(dataSource);
//                 deck.shuffle();
//                 return deck;
//             },
//             isValid = function(){
//                 return typeof players.length ==="number"
//             },
//             dealCardsToPlayers = function() {
//                 do {
//                     for(var player = 0; player < players.length; player++){
//                         var card = startingDeck.dealOne();
//                         if (card){
//                             players[player].drawDeck.deck.push(card);
//                         }
//                     }
//                 } while (startingDeck.deck.length);
//             };
//
//         if (isValid()){
//             startingDeck = makeDeck();
//
//             dealCardsToPlayers();
//
//             Game(players);
//
//         }
//     }catch(e){
//         alert("I'm sorry. I can't do that. That number of players is not allowed. Please refresh and try again.");
//     }
// }
