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
	"enchantment",
	"conjure",
	"alchemy",
	"mystic",
	"siren",
	"sorceress",
	"trance",
	"charm",
	"rune",
	"wizardry",
	"hermit",
	"oracle",
	"omen",
	"supernatural",
	"ritual",
	"snake",
	"incubus",
	"succubus",
	"nightmare",
	"serpent",
	"cemetary",
	"tomb",
	"flames",
	"spirit",
	"poison",
	"venom",
	"spellbook",
	"crone",
	"chant",
	"shadows"
];

var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];

for (var i = 0; i < word.length; i++) {
	answerArray[i] = "_";
}

var remainingLetters = word.length;

while (remainingLetters > 0) {

	alert(answerArray.join(" "));

	var guess = prompt("Guess a letter, or click cancel to stop playing.");

	if (guess === null) {
		break;
	} else if (guess.length !== 1) {
		alert("Please enter a single letter.");
	} else {
		for (var j = 0; j < word.length; j++) {
			if (word[j] === guess) {
				answerArray[j] = guess;
				remainingLetters--;
			}
		}
	}
}

alert(answerArray.join(" "));

alert("Good job! The answer was " + word + ".");