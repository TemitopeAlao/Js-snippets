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

//Write a function that takes an array of objects with department and employees properties, and returns the department with the highest average salary.
function departmentArr(input) {
  let highestAvg = 0;
  let topDept = "";
  input.forEach((dept) => {
    const salaries = dept.employees.map((emp) => emp.salary);
    console.log(salaries);
    const total = salaries.reduce((acc, cur) => acc + cur, 0);
    const avgSalary = total / salaries.length;
    if (avgSalary > highestAvg) {
      highestAvg = avgSalary;
      topDept = dept.department;
    }
  });
  return topDept;
}
departmentArr([
  { department: "HR", employees: [{ salary: 3000 }, { salary: 3500 }] },
  { department: "IT", employees: [{ salary: 5000 }, { salary: 7000 }] },
]);

// Create a function that receives an array of objects representing cars and their prices  and returns a new array with the brands and whether they are affordable.
function carsPrice(input) {
  return input.map((car) => {
    return {
      brand: car.brand,
      affordable: car.price < 30000,
    };
  });
}

carsPrice([
  { brand: "Toyota", price: 25000 },
  { brand: "Honda", price: 5000 },
  { brand: "Tesla", price: 200000 },
]);

//Implement a function that takes an array of objects containing movies and their ratings (e.g., '(title: "Inception", rating: 8.5}*) and returns a new array with movie titles and whether they are highly rated (rating >= 8
function movieRating(input) {
  const result = input.map((movie) => {
    return { title: movie.title, highlyRated: movie.rating >= 8 };
  });
  return result;
}
movieRating([
  { title: "Inception", rating: 8.5 },
  { title: "Sammie", rating: 10 },
  { title: "Frozen", rating: 4.5 },
  { title: "Perfect ", rating: 8 },
  { title: "The plan", rating: 6 },
]);

//Write a function that takes an array of objects representing countries and their GDPs (e.g., (name: "USA", gdp: 21000000000000}*) and returns a new array with country names and whether they are economically strong (GDP > 1 trillion).
function countryGDP(input) {
  return input.map((country) => {
    return {
      name: country.name,
      economic: country.gdp > 10000000000,
    };
  });
}
countryGDP([
  { name: "USA", gdp: 21000000000000 },
  { name: "Nig", gdp: 10000000000 },
  { name: "Canada", gdp: 310000000000000 },
]);

//Create a function that receives an array of objects representing cities and their average temperatures (e.g., '(name: "Tokyo", temperature: 25}*) and returns a new array with city names and whether they have a warm climate (temperature > 20).
function CityTemp(input) {
  return input.map((city) => {
    return {
      name: city.name,
      warmClimate: city.temperature > 20,
    };
  });
}
CityTemp([
  { name: "Tokyo", temperature: 25 },
  { name: "Egypt", temperature: -20 },
  { name: "France", temperature: 15 },
  { name: "Netherlands", temperature: 28 },
  { name: "Nigeria", temperature: 16 },
]);

//Write a function that takes an array of numbers and returns the two largest distinct numbers as an array.
const distinctNumbers = function (input) {
  const setNumbers = [...new Set(input)]
    .sort((a, b) => {
      return b - a;
    })
    .slice(0, 2);

  return setNumbers;
};
distinctNumbers([3, 1, 4, 4, 2, 5]);

//Write a function that takes an array of strings and returns an object where each string is a key, and its length is the value.

function valueLength(str) {
  const result = {};
  str.forEach(
    (word) =>
      //Key created using bracket notation--------Value
      (result[word] = word.length)
  );
  return result;
}
valueLength(["apple", "banana", "kiwi"]);

//Write a function that takes a nested array and returns a flat array
function number(input) {
  return input.flat(Infinity);
}
number([[1, 2], [3, 4], [5]]);

//Write a function that takes an array of numbers and groups them by even or odd into an object { even: [I, odd: [] }.
function groupOddEven(input) {
  const grouped = Object.groupBy(input, (num) =>
    num % 2 === 0 ? "even" : "odd"
  );
  return grouped;
}
groupOddEven([3, 8, 15, 2, 10]);

//----OR-----
function groupOddEven(input) {
  const grouped = { even: [], odd: [] };

  input.forEach((num) => {
    if (num % 2 === 0) {
      grouped.even.push(num);
    } else {
      grouped.odd.push(num);
    }
  });

  return grouped;
}
