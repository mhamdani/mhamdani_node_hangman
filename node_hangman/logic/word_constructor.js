
function Word(chosenWord, maxWrongGuesses) {
  this.chosenWord = chosenWord;
  this.wordToLowercase = chosenWord.toLowerCase();
  this.maxWrongGuesses = maxWrongGuesses;
  this.wrongGuessCount = 0;
}

function Letter(placeholder, value, isLetter) {
  this.placeholder = placeholder;
  this.value = value;
  this.isLetter = isLetter;
  this.wasGuessed = false;
}

Word.prototype.createWordSpaces = function() {
  let word = this.chosenWord;
  let wordArr = [];

  for (var i = 0; i < word.length; i++) {
    if (word[i] !== ' ') {
      let letter = new Letter('_', word[i].toLowerCase(), true);
      wordArr.push(letter.placeholder);
    }
    else {
      let letter = new Letter(' ', word[i].toLowerCase(), false);
      wordArr.push(letter.placeholder);
    }
  }
  this.wordArr = wordArr;
}

Word.prototype.displayWord = function() {
  let word = this.chosenWord;
  let guessString = [];

  for (var i = 0; i < word.length; i++) {
    if (word[i].wasGuessed) {
      guessString.push(word[i]);
    }
    else {
      guessString.push('_');
    }
  }
return guessString.join(' ');
}

Word.prototype.checkGuess = function(g) {
  var guess = g.toLowerCase();

  if (this.wordToLowercase.includes(guess)) {
    console.log('\n Good Guess! 😃'.green)
    this.updateWasGuessed(guess);

  } else {
    console.log('\n Sorry, wrong letter. 😔'.red);
    this.wrongGuessCount++;
  }
}

Word.prototype.updateWasGuessed = function(guess) {
// console.log(guess);

  let word = this.chosenWord;
  // console.log(word);
  let guessString = [];

  for (var i = 0; i < word.length; i++) {

    if (guess === word[i]) {
      word[i].wasGuessed = true;
      guessString.push(word[i]);
      }
        else {
          guessString.push('_');
        }
      }
    newDisplay = guessString.join(' ');
    console.log(newDisplay);
    updateWasGuessed = true;
  }

Word.prototype.isWordGuessed = function() {
  let word = this.chosenWord;
  var guessedArr = [];
  for (let i = 0; i < word.length; i++) {
    guessedArr.push(word[i].wasGuessed);
  }

  return guessedArr.every(Boolean);

}

module.exports = Word;
