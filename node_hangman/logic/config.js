var WORD_LIST = ['king', 'queen', 'knight', 'rook', 'pawn', 'bishop'];

var A_WORD = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];

var MAX_WRONG_GUESSES = 3;

module.exports = {
  aWord: A_WORD,
  maxWrongGuesses: MAX_WRONG_GUESSES,
};
