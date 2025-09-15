// ============================================
// STUDENT GRADING EXAMPLE
// ============================================

// Dataset: list of students with their scores
let students = [
  { name: "fatima", score: [90, 68] },
  { name: "charles", score: [32, 75] },
  { name: "adeola", score: [80, 56] },
  { name: "josh", score: [27, 46] },
];

// ============================================
// 1. Original Version (with helper function)
// ============================================

// Function that calculates average score
function studentGrade(scores) {
  let total = 0;
  for (let s of scores) {
    total += s; // add each score to total
  }
  let average = total / scores.length;
  return average;
}

// Loop through students and print results
for (let student of students) {
  let avg = studentGrade(student.score);

  if (avg >= 50) console.log(student.name + " average = " + avg + " passed");
  else console.log(student.name + " average = " + avg + " failed");
}

// ============================================
// 2. Flattened Version (calculation inline)
// ============================================

for (let student of students) {
  let total = 0;

  // directly loop through student's scores
  for (let s of student.score) {
    total += s;
  }

  let avg = total / student.score.length;

  if (avg >= 50) console.log(student.name + " average = " + avg + " passed");
  else console.log(student.name + " average = " + avg + " failed");
}

// ============================================
// 3. Version with Array.reduce() (cleaner)
// ============================================

for (let student of students) {
  // reduce adds all numbers in the score array
  let avg = student.score.reduce((sum, s) => sum + s, 0) / student.score.length;

  // ternary operator makes pass/fail shorter
  let result = avg >= 50 ? "passed" : "failed";

  console.log(`${student.name} average = ${avg} ${result}`);
}
