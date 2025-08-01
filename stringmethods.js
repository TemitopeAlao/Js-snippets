//Use all the  string methods in the group with at least two examples each
const word = "Channels";
const anotherWord = "monument";

//charAt() method
console.log(word.charAt(5));
console.log(anotherWord.charAt(3));

//concat() method
console.log(word.concat("", " is my name"));
console.log(anotherWord.concat("", "al"));

//startsWith() method
console.log(word.startsWith("f"));
console.log(anotherWord.startsWith("m"));

//endsWith() method
console.log(word.endsWith("s"));
console.log(anotherWord.endsWith("n"));

//includes() method
console.log(word.includes("n"));
console.log(anotherWord.includes("r"));

//indexOf() method
console.log(word.indexOf("e"));
console.log(anotherWord.includes("t"));

//lastIndexOf() method
console.log(word.lastIndexOf("n"));
console.log(anotherWord.lastIndexOf("m"));

// match() method
console.log(word.match(/nells/));
console.log(anotherWord.match(/men/));

// padStart() method
console.log(word.padStart(14, "#"));
console.log(anotherWord.padStart(20, "&"));

// padEnd() method
console.log(word.padEnd(18, "*"));
console.log(anotherWord.padEnd(15, "+"));

// repeat() method
console.log(word.repeat(5));
console.log(anotherWord.repeat(2));

// replace() method
console.log(word.replace("nnels", "yil"));
console.log(anotherWord.replace("ument", "key"));

//search() method
console.log(word.search("n"));
console.log(anotherWord.search("o"));

//slice() method
console.log(word.slice(-1));
console.log(anotherWord.slice(0, 4));

//split() method
console.log("Channels is my name".split(" "));
console.log(anotherWord.split(""));

//substring() method
console.log(word.substring(3, 6));
console.log(anotherWord.substring(2, 7));

//toLowerCase() method
console.log("Hello, THERE".toLowerCase());
console.log("Experience is the BEST TeacheR".toLowerCase());

//toUpperCase() method
console.log("another beautiful morning".toUpperCase());
console.log("i enJoy coDing".toUpperCase());

//trim() method
console.log("  I played football yesterday  ".trim());
console.log(" greet ".trim());

//trimStart() method
console.log("  Thank you  ".trimStart());
console.log("  Hello ".trimStart());

//trimEnd() method
console.log("channels  ".trimEnd());
console.log("  The end  ".trimEnd());

const myName = " channels";

let trimmed = myName.trimStart(); // only declare once
let sliced = trimmed.slice(1, 5);
let addNewLetter = sliced.concat("", "a");
let result = addNewLetter.toUpperCase();

console.log(result); // "HANNA"
