/*Write a function that:
Filters out users who are 18 years old or younger
Formats the name of each valid user so that each word starts with a capital letter and the rest are in lowercase */

function validateAndFormatUsers(users) {
  // Step 1: Filter users with age > 18
  const validUsers = users.filter((user) => user.age > 18);

  // Step 2: Format names of valid users
  const formattedUsers = validUsers.map((user) => {
    const formattedName = user.name
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
    return { ...user, name: formattedName };
  });

  return formattedUsers;
}

const users = [
  { name: "channels oladapo", age: 32, email: "channels@gmail.com" },
  { name: "teMi OYINkansola", age: 15, email: "temity@yahoo.com" },
];

const result = validateAndFormatUsers(users);
console.log(result);

//Write a function that takes an array of student objects and returns the name of the student with the highest score.
function findHighestScorer(students) {
  let highestScorer = students[0];

  for (let i = 1; i < students.length; i++) {
    if (students[i].score > highestScorer.score) {
      highestScorer = students[i];
    }
  }

  return highestScorer.name;
}

const students = [
  { name: "Channels", score: 32 },
  { name: "Ayo", score: 15 },
  { name: "Tolu", score: 55 },
];

console.log(findHighestScorer(students));

//Create a function that counts how many vowels (a, e, i, o, u) appear in a given string.
function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  return str
    .toLowerCase() // Step 1: Make everything lowercase
    .split("") // Step 2: Turn the string into an array of characters ["m", "y", " ", "n", "a", "m", "e", ...]
    .filter((char) => vowels.includes(char)).length; // Step 3: Keep only the vowels  ["a", "e", "i", "a", "e"] // Step 4: Return how many vowels we found
}

console.log(countVowels(" my name is channels"));

//Write a function that takes an array and returns a new array with the elements in reverse order — but do not use .reverse().
function reverseArray(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    /*Start from the end (arr.length - 1)
    Move backwards (i--)
    Until you reach the first item at i = 0 */
    reversed.push(arr[i]);
  }
  return reversed;
}

console.log(reverseArray([2, 4, 6, 8]));
