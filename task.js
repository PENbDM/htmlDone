// const wordList = [
//   "another",
//   "word",
//   "in",
//   "my",
//   "amazing",
//   "array",
//   "because",
//   "it",
//   "is",
//   "excellent",
//   "original",
//   "introduce",
//   "nail",
//   "friendship",
//   "myth",
//   "lily",
//   "campaign",
//   "pride",
//   "diplomat",
//   "deficit",
//   "contain",
//   "experience",
//   "lease",
//   "key",
//   "fine",
//   "umbrella",
//   "fame",
//   "record",
//   "blast",
//   "revenge",
//   "crevice",
//   "flourish",
//   "fish",
//   "remember",
//   "lesson",
//   "promotion",
//   "defeat",
//   "to",
//   "flowers",
//   "knit",
//   "magnitude",
//   "why",
//   "engine",
//   "realism",
//   "close",
//   "effect",
//   "fly",
//   "tire",
//   "slab",
//   "coup",
//   "zero",
//   "hostility",
//   "pier",
//   "rhythm",
// ];
// function wordsStartingWithB(wordList) {
//   const result = [];

//   for (let i = 0; i < wordList.length; i++) {
//     const word = wordList[i];

//     // Check if the word starts with 'B' or 'b'
//     if (word.charAt(0).toLowerCase() === "b") {
//       result.push(word);
//     }
//   }

//   return result;
// }
// const wordsWithB = wordsStartingWithB(wordList);
// console.log(wordsWithB);
const words = ["ssss", "dsadsdasd", "sadasd", "ss", "faf"];

const result = words.filter((word) => word.length > 4);
const resultMap = words.map((word) => word.length > 4);
console.log(result);
console.log(resultMap);

const checkLengthOfWords = (words) => {
  return words.filter((word) => word.length > 4);
};
console.log(checkLengthOfWords(["ssss", "dsadsdasd", "sadasd", "ss", "faf"]));
