var inquirer = require('inquirer');

function Word(word) {
  this.chosenWord = chosenWord;
}

function letter(isLetter, holder) {
  this.isLetter = isLetter;
  this.holder = holder;
}

Word.prototype.createSpaces = function(){
  let word = this.chosenWord;
  let wordSpaces = [];
  var alphabet: Array = ("abcdefghijklmnopqrstuvwxyz").split("");

  for (var i = 0; i < word.length; i++) {
    if (word[i].include(alphabet[i])) {
      wordSpaces.push("_");
    }
    else {
      wordSpaces.push('')
    }
  }
  this.wordSpaces = wordSpaces;
  console.log(wordSpaces);
}
