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
	"exorcism",
	"nightshade",
	"hemlock",
	"succubus",
	"incubus"
];

// pick a random word and display in current-word
var currentWord = wordArray[Math.floor(Math.random() * wordArray.length)];

var str = currentWord;

console.log(currentWord);

// display picked word in "current word", with "_" replacing every 
// letter

var answerArray = [];

for (var i = 0; i < currentWord.length; i++) {
	answerArray[i] = "_";
}

document.getElementById("current-word").innerHTML = answerArray.join(" ");

// listen for event keypress

document.addEventListener("keypress", function() {
		console.log(event.key);
});

// when a letter is pressed, make sure it is a letter; look 
// through current word one letter at a time to see if any 
// matches; if there are matches, show them in current-word



// var remainingLetters = currentWord.length;

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


// if letter hs already been pressed, do nothing


// once 15 letters are in this section, player loses and another
// current word is chosen


// if user removes all dashes from chosen word, they score 1 point
// and a new current word is chosen
