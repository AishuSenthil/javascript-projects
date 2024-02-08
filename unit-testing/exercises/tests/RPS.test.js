const whoWon = require('../RPS.js');

describe("Rock Paper Scissors", function(){

   test("Player 1 and Player 2 tie", function(){
      let result = whoWon('rock', 'rock');
      expect(result).toEqual('TIE!');
   });

   test("Player 2 wins with paper", function(){
      let result = whoWon('rock', 'paper');
      expect(result).toEqual('Player 2 wins!');
   });

   test("Player 2 wins with scissors", function(){
      let result = whoWon('paper', 'scissors');
      expect(result).toEqual('Player 2 wins!');
   });

   test("Player 2 wins with rock", function(){
      let result = whoWon('scissors', 'rock');
      expect(result).toEqual('Player 2 wins!');
   });

   test("Player 1 wins with paper", function(){
      let result = whoWon('rock', 'scissors');
      expect(result).toEqual('Player 1 wins!');
   });

   test("Player 1 wins with scissors", function(){
      let result = whoWon('paper', 'rock');
      expect(result).toEqual('Player 1 wins!');
   });

   test("Player 1 wins with rock", function(){
      let result = whoWon('scissors', 'paper');
      expect(result).toEqual('Player 1 wins!');
   });

});
