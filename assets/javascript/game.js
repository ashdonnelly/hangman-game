var words = [
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
	"enchant",
	"conjure",
	"alchemy",
	"mystic",
	"siren",
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
	"incantation",
	"plague",
	"druid",
	"summon",
	"undead",
	"exorcism"
];


// pick a random word and display in current-word
var currentWord = words[Math.floor(Math.random() * words.length)];

// display picked word in "current word", with "_" replacing every 
// letter

var answerArray = [];

for (var i = 0; i < currentWord.length; i++) {
	answerArray[i] = "_";
}

document.getElementById("current-word").innerHTML = answerArray.join(" ");

// when a letter is pressed, look through current word one letter
// at a time to see if any matches; if there are matches, show
// the letter

// var remainingLetters = currentWord.length;

// while (remainingLetters > 0) {
// 	var guess = onkeyup;
// };

// if letter is not in the current word, display it in the "guessed
// letters" section


// if letter hs already been pressed, do nothing


// once 10 letters are in this section, player loses and another
// current word is chosen


// if user removes all dashes from chosen word, they score 1 point
// and a new current word is chosen


// var remainingLetters = currentWord.length;

// while (remainingLetters > 0) {

// 	alert(answerArray.join(" "));

// 	var guess = onkeyup;

// 	if (guess === null) {
// 		break;
// 	} else {
// 		for (var j = 0; j < currentWord.length; j++) {
// 			if (currentWord[j] === guess) {
// 				answerArray[j] = guess;
// 				remainingLetters--;
// 			}
// 		}
// 	}
// }

// alert(answerArray.join(" "));

// alert("Good job! The answer was " + currentWord + ".");