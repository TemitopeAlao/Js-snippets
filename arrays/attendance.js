// 📌 List of learners
const attendance = {
  Joa: [],
  Edua: [],
  Miria: [],
};

// 📌 Function to mark attendance
// name → student name (string)
// isPresent → true or false
function markAttendance(name, isPresent) {
  // Use bracket notation because `name` is a variable
  attendance[name].push(isPresent ? "Present" : "Absent");
}

// 📌 Simulate attendance for 3 days
for (let day = 1; day <= 3; day++) {
  markAttendance("Joa", day % 2 === 0); // Joa present only on even days
  markAttendance("Edua", day === 1); // Edua present only on day 1
  markAttendance("Miria", true); // Miria always present
}

// 📌 Function to count attendance records
function countAttendance(name) {
  const records = attendance[name]; // e.g. ["Present", "Absent", "Present"]

  let presentCount = 0;
  let absentCount = 0;

  for (const status of records) {
    if (status === "Present") presentCount++;
    else absentCount++;
  }

  return { presentCount, absentCount };
}

// 📌 Find top students
let mostPresentStudent = "";
let mostAbsentStudent = "";
let maxPresent = 0;
let maxAbsent = 0;

// Loop through each learner in attendance
for (const name in attendance) {
  const { presentCount, absentCount } = countAttendance(name);

  if (presentCount > maxPresent) {
    maxPresent = presentCount;
    mostPresentStudent = name;
  }

  if (absentCount > maxAbsent) {
    maxAbsent = absentCount;
    mostAbsentStudent = name;
  }
}

// 📌 Final output
console.log("Attendance Records:", attendance);
console.log(`Most Present: ${mostPresentStudent} (${maxPresent} times)`);
console.log(`Most Absent: ${mostAbsentStudent} (${maxAbsent} times)`);

/*
// ============================================
// step-by-step debugger-style walkthrough
// ============================================

// 📌 List of learners
const attendance = {
  Joa: [],    // ← starting empty
  Edua: [],
  Miria: [],
};

// 📌 Function to mark attendance
function markAttendance(name, isPresent) {
  // Function is not running yet, only defined
  attendance[name].push(isPresent ? "Present" : "Absent");
  // ← when called, pushes "Present" or "Absent" into the correct student's array
}

// 📌 Simulate attendance for 3 days
for (let day = 1; day <= 3; day++) {  // ← loop starts
  // Day 1:
  markAttendance("Joa", day % 2 === 0); // 1 % 2 === 0 ❌ → pushes "Absent"  <-- jump into function
    // attendance["Joa"].push("Absent") happens
    // function returns, loop continues
  markAttendance("Edua", day === 1);    // 1 === 1 ✅ → pushes "Present"  <-- jump into function
  markAttendance("Miria", true);        // always true → pushes "Present"  <-- jump into function

  // Day 2:
  markAttendance("Joa", day % 2 === 0); // 2 % 2 === 0 ✅ → pushes "Present"
  markAttendance("Edua", day === 1);    // 2 === 1 ❌ → pushes "Absent"
  markAttendance("Miria", true);        // pushes "Present"

  // Day 3:
  markAttendance("Joa", day % 2 === 0); // 3 % 2 === 0 ❌ → pushes "Absent"
  markAttendance("Edua", day === 1);    // 3 === 1 ❌ → pushes "Absent"
  markAttendance("Miria", true);        // pushes "Present"
}
// ← loop ends

// Attendance state now:
// attendance = {
//   Joa: ["Absent", "Present", "Absent"],
//   Edua: ["Present", "Absent", "Absent"],
//   Miria: ["Present", "Present", "Present"]
// }

// 📌 Function to count attendance records
function countAttendance(name) {
  const records = attendance[name]; // fetch array for this student
  let presentCount = 0;
  let absentCount = 0;

  for (const status of records) {     // loop over that student’s array
    if (status === "Present") presentCount++;
    else absentCount++;
  }

  return { presentCount, absentCount }; // returns object to caller
}

// 📌 Find top students
let mostPresentStudent = "";
let mostAbsentStudent = "";
let maxPresent = 0;
let maxAbsent = 0;

// Loop through each learner
for (const name in attendance) {
  // ← Loop starts: name = "Joa"
  const { presentCount, absentCount } = countAttendance(name);  
  // ← JS jumps into countAttendance("Joa")
    // records = ["Absent", "Present", "Absent"]
    // loop counts: presentCount = 1, absentCount = 2
    // returns {1, 2} <-- JS jumps back to loop
  if (presentCount > maxPresent) {      // 1 > 0 ✅
    maxPresent = 1
    mostPresentStudent = "Joa"
  }
  if (absentCount > maxAbsent) {        // 2 > 0 ✅
    maxAbsent = 2
    mostAbsentStudent = "Joa"
  }

  // ← Next iteration: name = "Edua"
  const { presentCount: p2, absentCount: a2 } = countAttendance("Edua")
    // records = ["Present", "Absent", "Absent"]
    // counts: p2=1, a2=2
    // returns {1, 2}
  if (p2 > maxPresent) { 1>1 ❌ → no change }
  if (a2 > maxAbsent) { 2>2 ❌ → no change }

  // ← Next iteration: name = "Miria"
  const { presentCount: p3, absentCount: a3 } = countAttendance("Miria")
    // records = ["Present","Present","Present"]
    // counts: p3=3, a3=0
    // returns {3,0}
  if (p3 > maxPresent) { 3>1 ✅ → maxPresent=3, mostPresentStudent="Miria" }
  if (a3 > maxAbsent) { 0>2 ❌ → no change }

} // ← loop ends

// 📌 Final output
console.log("Attendance Records:", attendance);
// Prints full object
console.log(`Most Present: ${mostPresentStudent} (${maxPresent} times)`); // Miria (3 times)
console.log(`Most Absent: ${mostAbsentStudent} (${maxAbsent} times)`);   // Joa (2 times)

*/
