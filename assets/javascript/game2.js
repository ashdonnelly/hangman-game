var canPLay = true;
var wordArray = [
	"spell", "coven", "raven", "familiar", "devil", "magic", "cauldron", "potion", "curse", "demon", "ancient", "occult", "illusion", "moonlight", "mystic", "necromancer", "sacrifice", "shaman", "shapeshift", "bonfire", "conjure", "alchemy", "mystic", "sorceress", "trance", "charm", "rune", "aura", "hermit", "oracle", "omen", "supernatural", "ritual", "snake", "venom", "equinox", "ceremony", "nightmare", "serpent", "cemetery", "tomb", "flames", "spirit", "reanimate", "arcane", "spellbook", "crone", "chant", "enchant", "shadows", "candlelight", "skull", "incense", "chalice", "elixir", "paranormal", "solstice", "zodiac", "powers", "pagan", "druid", "summon", "undead", "nightshade", "hemlock", "sage"
];
var toGuess = " ";
var displayWord = " ";
var wrongGuesses = 0;

function selectLetter(1) 
{
if (canPlay == false)
{
return;
}

if (usedLetters.index.of(1) != -1)
{
return;
}

usedLetters +=1;
document.games.usedLetters.value = usedLetters;