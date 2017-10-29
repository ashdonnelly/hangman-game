//words array
var wordArray = [
	"spell", "coven", "raven", "familiar", "devil", "magic", "cauldron", "potion", "curse", "demon", "ancient", "occult", "illusion", "moonlight", "mystic", "necromancer", "sacrifice", "shaman", "shapeshift", "bonfire", "conjure", "alchemy", "mystic", "sorceress", "trance", "charm", "rune", "aura", "oracle", "omen", "supernatural", "ritual", "snake", "venom", "equinox", "ceremony", "nightmare", "serpent", "cemetery", "tomb", "flames", "spirit", "reanimate", "arcane", "spellbook", "crone", "chant", "enchant", "shadows", "candlelight", "skull", "incense", "chalice", "elixir", "paranormal", "solstice", "zodiac", "powers", "pagan", "druid", "summon", "undead", "nightshade", "hemlock", "sage"
];

// pick a random word and display in current-word
var currentWord = wordArray[Math.floor(Math.random() * wordArray.length)];

//==============================================================================================================================
// GLOBAL VARIABLES
//==============================================================================================================================
var answerArray = [];
var guessesLeft = 12;
var totalWins = 0;
console.log(currentWord);

// display picked word in current-word, with _ replacing every letter
// measure length of current-word and insert _ in each index
// for (var i = 0; i < currentWord.length; i++) {
// 	answerArray[i] = "_";
// };

var remainingLetters = currentWord.length;

//add into current-word element with spaces in between
document.getElementById("current-word").innerHTML = answerArray.join(" ");

//==============================================================================================================================
// FUCTIONS
//==============================================================================================================================

// function for adding letters that have been guessed
var logLetter = function () {
	var guess = event.key;
	var node = document.createElement("span");
	var textnode = document.createTextNode(guess);
	node.appendChild(textnode);
	document.getElementById("guessed-letters").appendChild(node);
};

// function to restart and get new word
// not working?
var reset = function() {
	var answerArray = [];
	var guessesLeft = 12;
	document.getElementById("current-word").innerHTML = answerArray.join(" ");
	var currentWord = wordArray[Math.floor(Math.random() * wordArray.length)];
	for (var i = 0; i < currentWord.length; i++) {
		answerArray[i] = "_";
	};
};

// function to add a point
// partially working -- how to make game reset?
var winPoint = function() {
	if (remainingLetters === 0) {
		document.getElementById("wins-count").innerHTML = ++totalWins;
		document.reset;
		document.keypress;
	};
};

// function to restart if user runs out of guesses
var lose = function () {
	for (var k = 0; k < answerArray; k++) {
		if (currentWord[k] === "_") {
			document.reset;
		};
	};
};

// listen for event keypress;
// when a letter is pressed, make sure it is a letter; look 
// through current word one letter at a time to see if any 
// matches; if there are matches, show them in current-word

//==============================================================================================================================
// PROCESSES / CALLS ON FUNCTIONS / LOOPS
//==============================================================================================================================

for (var i = 0; i < currentWord.length; i++) {
	answerArray[i] = "_";
};

document.addEventListener("keypress", function() {
	var guess = event.key;
	for (var j = 0; j < currentWord.length; j++) {
		if (currentWord[j] === guess) {
			answerArray[j] = guess;
			remainingLetters--;
			document.getElementById("current-word").innerHTML = answerArray.join(" ");
		};
	};
	logLetter("guessed-letters");
	document.getElementById("guesses-left").innerHTML = guessesLeft--;
	winPoint("wins-count");
});




// pseudocoding notes:

// add to wins

// when guesses-left reaches 0, game over
// if remainingLetters === 0, add 1 point to totalWins

// if letter has already been pressed, do nothing

// once 13 letters are in this section, player loses and another
// current word is chosen

// if remainingLetters === 0, 1 win is added
// and a new current word is chosen