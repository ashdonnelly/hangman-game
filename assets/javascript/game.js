//======================================================================================
// GLOBAL VARIABLES
//======================================================================================

//words array
var wordOptions = [
	"spell", "coven", "raven", "familiar", "devil", "magic", "cauldron", "potion", "curse", "demon", "ancient", "occult", "illusion", "moonlight", "mystic", "necromancer", "sacrifice", "shaman", "shapeshift", "bonfire", "conjure", "alchemy", "mystic", "sorceress", "trance", "charm", "rune", "aura", "oracle", "omen", "supernatural", "ritual", "snake", "venom", "equinox", "ceremony", "nightmare", "serpent", "cemetery", "tomb", "flames", "spirit", "reanimate", "arcane", "spellbook", "crone", "chant", "enchant", "shadows", "candlelight", "skull", "incense", "chalice", "elixir", "paranormal", "solstice", "zodiac", "powers", "pagan", "druid", "summon", "undead", "nightshade", "hemlock", "sage"
];

//vars at page load
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

// game counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 13;

//sound clip vars
var creepySound = new Audio("ScaryGirl.mp3");
var crowSound = new Audio("Crow-caw.mp3");
var backgroundSound = new Audio("background-sound.mp3");

//======================================================================================
// FUCTIONS (reusable blocks of code to call on when needed)
//======================================================================================

function startGame () {

	//pick random word
	selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];

	//split word and make an array of the letters
	lettersInWord = selectedWord.split("");

	//find number of letters in word aka number of blanks needed to display
	numBlanks = lettersInWord.length;

	//reset key variables
	guessesLeft = 13;
	wrongLetters = [];
	blanksAndSuccesses = [];

	//populate blanksAndSuccesses with right # of blanks
	for (var i = 0; i < numBlanks; i++) {
		blanksAndSuccesses.push("_");
	};

	//change html to reflect current round conditions
	document.getElementById("current-word").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("guesses-left").innerHTML = guessesLeft;
	document.getElementById("wins-count").innerHTML = winCount;
	document.getElementById("losses-count").innerHTML = lossCount;

	//play sound
	backgroundSound.play();

	//test and debug
	console.log(selectedWord);
	console.log(lettersInWord);
	console.log(numBlanks);
	console.log(blanksAndSuccesses);
};

//take guessed letter and compare to selected word
function checkLetters (letter) {
	//check if letter exists in the word
	var isLetterInWord = false;
	for (var i = 0; i < numBlanks; i++) {
		if(selectedWord[i] == letter) {
			isLetterInWord = true;
		}
	}

	//check where in word the letter exists then populate blanks and success array
	if (isLetterInWord) {
		for (var i = 0; i < numBlanks; i++) {
			if(selectedWord[i] == letter) {
				blanksAndSuccesses[i] = letter;
			}
		}
	//letter wasn't found
	} else {
		wrongLetters.push(letter);
		guessesLeft--;		
	};

	//test and debug
	console.log(blanksAndSuccesses);
};

//when round is over
function roundComplete() {

	//show relevant info in console
	console.log("Win count: " + winCount + " | Losses count: " + lossCount + " | Guesses Left: " + guessesLeft);

	//update html to reflect current stats
	document.getElementById("guesses-left").innerHTML = guessesLeft;
	document.getElementById("current-word").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("guessed-letters").innerHTML = wrongLetters.join(" ");

	//check if user won
	if (lettersInWord.toString() == blanksAndSuccesses.toString()) {

		//update wins count in html
		document.getElementById("wins-count").innerHTML = winCount;

		//update wins count
		winCount++;

		//play more creepy sounds and tell user
		creepySound.play();
		alert("You Won!");

		//reset game
		startGame();

	//check if user lost
	} else if (guessesLeft == 0) {

		//update loss count in html
		document.getElementById("losses-count").innerHTML = lossCount;

		lossCount++;

		//play creepy lose sound and alert user
		crowSound.play();
		alert("You Lost!");

		//restart
		startGame();
	};
};

//======================================================================================
// MAIN PROCESSES (function calls aka game)
//======================================================================================

//initiate code the first time
startGame();

//register key clicks
document.onkeyup = function(event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

	//run function that checks for guessed letter in word
	checkLetters(letterGuessed);

	//show relevant info
	roundComplete();

	//test and debug
	console.log(letterGuessed);
};
