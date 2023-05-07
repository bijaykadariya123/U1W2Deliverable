// console.log("Hey Developers!!!");

const words = {
  number: "",
  adjective: "",
  pluralNoun: "",
  adverb: "",
  anotherAdjective: "",
};

function startMadlib() {
  words.number = prompt("give a number?");
  words.adjective = prompt("give a adjective?");
  words.pluralNoun = prompt("give a plural noun?");
  words.adverb = prompt("give a adverb?");
  words.anotherAdjective = prompt("give a another adjective?");
}

startMadlib();
let stringInterpolation = `Once upon a time a group of${words.number}General Assembly graduates
got together and made a startup called ${words.adjective}Technologies.
Their goal was to create smart ${words.pluralNoun}.
They approached the challenge ${words.adverb}
which ultimately lead them to ${words.anotherAdjective}ame.`;
alert(stringInterpolation);
