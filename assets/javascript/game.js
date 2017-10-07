var wordArray = [
	"spell",
	"coven",
	"raven",
	"familiar",
	"devil",
	"magic",
	"cauldron",
	"potion",
	"curse",
	"demon",
	"hex",
	"ancient",
	"occult",
	"illusion",
	"moonlight",
	"mystic",
	"necromancer",
	"sacrifice",
	"shaman",
	"shapeshift",
	"bonfire",
	"conjure",
	"alchemy",
	"mystic",
	"sorceress",
	"trance",
	"charm",
	"rune",
	"aura",
	"hermit",
	"oracle",
	"omen",
	"supernatural",
	"ritual",
	"snake",
	"venom",
	"equinox",
	"ceremony",
	"nightmare",
	"serpent",
	"cemetary",
	"tomb",
	"flames",
	"spirit",
	"reanimate",
	"arcane",
	"spellbook",
	"crone",
	"chant",
	"enchant",
	"shadows",
	"candlelight",
	"skull",
	"incense",
	"chalice",
	"elixir",
	"paranormal",
	"solstice",
	"zodiac",
	"powers",
	"pagan",
	"druid",
	"summon",
	"undead",
	"nightshade",
	"hemlock",
	"sage"
];

// pick a random word and display in current-word
var currentWord = wordArray[Math.floor(Math.random() * wordArray.length)];
var remainingLetters = currentWord.length;
var answerArray = [];
// var guessedLettersArray = [];
console.log(currentWord);

// display picked word in "current word", with "_" replacing every 
// letter

for (var i = 0; i < currentWord.length; i++) {
	answerArray[i] = "_";
}

document.getElementById("current-word").innerHTML = answerArray.join(" ");
// document.getElementById("guessed-letters").innerHTML = guessedLettersArray.join(" ");

function logLetter() {
	var guess = event.key;
	var node = document.createElement("span");
	var textnode = document.createTextNode(guess);
	node.appendChild(textnode);
	document.getElementById("guessed-letters").appendChild(node);
};

// listen for event keypress;
// when a letter is pressed, make sure it is a letter; look 
// through current word one letter at a time to see if any 
// matches; if there are matches, show them in current-word

document.addEventListener("keypress", function() {
	var guess = event.key;
	console.log(guess);
	for (var j = 0; j < currentWord.length; j++) {
		if (currentWord[j] === guess) {
			answerArray[j] = guess;
			remainingLetters--;
			document.getElementById("current-word").innerHTML = answerArray.join(" ");
		};
	};
	logLetter("guessed-letters");
});

// when guesses-left reaches 0, game over
// if remainingLetters === 0, add 1 point to totalWins

// var totalWins = 0;
// var guessesLeft = 13;
// document.getElementById("wins-count") = totalWins;
// document.getElementById("guesses-left") = guessesLeft;


// document.addEventListener("keypress", function() {
// 	while (remainingLetters > 0) {
// 		for (var j = 0; j < currentWord.length; j++) {
// 			if (currentWord[j] === guess) {
// 					answerArray[j] = guess;
// 					remainingLetters--;
// 			};
// 		};
// 	};
// });





// if letter is not in the current word, display it in the "guessed
// letters" section


// if letter has already been pressed, do nothing


// once 15 letters are in this section, player loses and another
// current word is chosen


// if user removes all dashes from chosen word, they score 1 point
// and a new current word is chosen