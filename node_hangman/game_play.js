// Dependencies
var colors = require('colors');
var inquirer = require('inquirer');
var config = require('./config.js');
var Game = require('./game_rules.js');
var Word = require('./word_constructor.js');
// var Prompt = require('./prompt.js');


// Welcome prompt
function displayPrompt(){
  console.log("\nWelcome to Hangman-- chess edition!".magenta.bold + "\n\nPlease guess the name of the chess piece below by typing a letter into the console.\n".cyan.underline);
}
displayPrompt();

// Start new Game
var game = new Game(0, 0, 0);


// Select the randomly generated word from the WORD_LIST in config.js
var gameWord = new Word(config.aWord, config.maxWrongGuesses);
console.log(gameWord.chosenWord.black);


// Provide directions to user on game play
console.log("(^ Highlight the space above to see the chosen chess piece.)\n".gray)


// Create word holder
// gameWord.createWordSpaces();
console.log("\n============= START GAME ================\n".black.bgWhite);


// Ask for user's input/guess
function promptUser(){
console.log(gameWord.displayWord());
console.log("\n");

  inquirer.prompt([
    {
      name: "letterGuess",
      message: "Type a letter to guess: "
    }
  ]).then(function(answer){

    gameWord.checkGuess(answer.letterGuess);
// promptUser();

    gameWord.isWordGuessed();

    if (gameWord.wrongGuessCount < gameWord.maxWrongGuesses && !gameWord.isWordGuessed()) {
      console.log('==================\n')
    }
    else if (gameWord.isWordGuessed()) {
      console.log('\nGreat job! The word is: ' + gameWord.chosenWord);
      console.log("------ GOOD GAME ------");
    }
    else {
      console.log("You're out of guesses 😔 . The word is: "+ gameWord.chosenWord);
      console.log("------- GAME OVER -------");
    }

  });
};

promptUser();
