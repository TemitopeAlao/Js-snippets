const word = "Channels";
const anotherWord = "monument";

/*
==========================
String Methods in JavaScript
==========================
*/

// charAt(index) - Returns the character at a specified index
console.log(word.charAt(5)); // 'e'
console.log(anotherWord.charAt(3)); // 'u'

// concat(str1, str2, ...) - Joins two or more strings
console.log(word.concat(" is my name")); // 'Channels is my name'
console.log(anotherWord.concat("al")); // 'monumental'

// startsWith(substring) - Checks if string starts with given substring
console.log(word.startsWith("f")); // false
console.log(anotherWord.startsWith("m")); // true

// endsWith(substring) - Checks if string ends with given substring
console.log(word.endsWith("s")); // true
console.log(anotherWord.endsWith("n")); // false

// includes(substring) - Checks if string contains a given substring
console.log(word.includes("n")); // true
console.log(anotherWord.includes("r")); // false

// indexOf(value) - Returns the index of the first occurrence
console.log(word.indexOf("e")); // 5
console.log(anotherWord.indexOf("t")); // 6

// lastIndexOf(value) - Returns the last occurrence index of a value
console.log(word.lastIndexOf("n")); // 2
console.log(anotherWord.lastIndexOf("m")); // 5

// match(regex) - Returns matched result using RegEx
console.log(word.match(/nells/)); // null
console.log(anotherWord.match(/men/)); // ['men']

// padStart(targetLength, padStr) - Pads the beginning of the string
console.log(word.padStart(14, "#")); // '######Channels'
console.log(anotherWord.padStart(20, "&")); // '&&&&&&&&&&&monument'

// padEnd(targetLength, padStr) - Pads the end of the string
console.log(word.padEnd(18, "*")); // 'Channels**********'
console.log(anotherWord.padEnd(15, "+")); // 'monument+++++++'

// repeat(count) - Returns a new string repeated count times
console.log(word.repeat(5)); // 'ChannelsChannelsChannelsChannelsChannels'
console.log(anotherWord.repeat(2)); // 'monumentmonument'

// replace(oldValue, newValue) - Replaces part of string
console.log(word.replace("nnels", "yil")); // 'Chayil'
console.log(anotherWord.replace("ument", "key")); // 'monkey'

// search(substring or regex) - Returns index of match
console.log(word.search("n")); // 2
console.log(anotherWord.search("o")); // 1

// slice(start, end) - Extracts part of string (end not included)
console.log(word.slice(-1)); // 's'
console.log(anotherWord.slice(0, 4)); // 'monu'

// split(separator) - Splits string into array
console.log("Channels is my name".split(" ")); // ['Channels', 'is', 'my', 'name']
console.log(anotherWord.split("")); // ['m','o','n','u','m','e','n','t']

// substring(start, end) - Similar to slice but doesn't accept negatives
console.log(word.substring(3, 6)); // 'nne'
console.log(anotherWord.substring(2, 7)); // 'numen'

// toLowerCase() - Converts string to lowercase
console.log("Hello, THERE".toLowerCase()); // 'hello, there'
console.log("Experience is the BEST TeacheR".toLowerCase()); // 'experience is the best teacher'

// toUpperCase() - Converts string to uppercase
console.log("another beautiful morning".toUpperCase()); // 'ANOTHER BEAUTIFUL MORNING'
console.log("i enJoy coDing".toUpperCase()); // 'I ENJOY CODING'

// trim() - Removes whitespace from both ends
console.log("  I played football yesterday  ".trim()); // 'I played football yesterday'
console.log(" greet ".trim()); // 'greet'

// trimStart() - Removes whitespace from the start
console.log("  Thank you  ".trimStart()); // 'Thank you  '
console.log("  Hello ".trimStart()); // 'Hello '

// trimEnd() - Removes whitespace from the end
console.log("channels  ".trimEnd()); // 'channels'
console.log("  The end  ".trimEnd()); // '  The end'

/*
Trim a name, slice it, add a new letter, and convert to uppercase
*/

const myName = " channels";

let trimmed = myName.trimStart(); // 'channels'
let sliced = trimmed.slice(1, 5); // 'hann'
let addNewLetter = sliced.concat("a"); // 'hanna'
let result = addNewLetter.toUpperCase(); // 'HANNA'

console.log(result); // 'HANNA'
