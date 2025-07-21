//var a = 10;
// var a = 12;
// console.log(a);

// let b = 10;
// b = 12;
// console.log(b);

// const c = 90;
// console.log(c);
// console.log(typeof c);

// let name = "abibsha";
// let cast = "ghaju";
// console.log(name + cast);

// let temperature = 45;
// if (temperature > 30) {
//   console.log("Temperature is greater than 30 degree celsius");
// } else {
//   console.log("Temperature is less than 30 degree celsius");
// }

// let isRaining = true;
// if (isRaining) {
//   console.log("Take an umbrella");
// }

// let num = prompt("Enter a number");
// if (num > 0) {
//   console.log("Number is positive.");
// } else if (number < 0) {
//   console.log("Number is negative.");
// } else {
//   console.log("Number is zero.");
// }

// let student = {
//   fullName: "Abibsha Ghaju",
//   age: 19,
//   studentId: "np04A099",
//   address: "Bhaktapur",
// };
// console.log(student);

// let attendance = {
//   fullName: "Abibsha Ghaju",
//   studentId: "np04A09999",
//   classGroup: 3,
//   classType: "Tutorial",
//   isPresent: true,
// };
// console.log(attendance);
// console.log(attendance.isPresent);
// console.log(attendance["isPresent"]);

// let string1 = prompt("Enter first name:");
// let string2 = prompt("Enter second name:");
// if (string1 === string2) {
//   console.log("The strings are equal.");
// } else {
//   console.log("The strings are not equal.");
// }

// let age = prompt("Enter your age:");
// if (age >= 0 && age <= 12) {
//   console.log("You are a child.");
// } else if (age <= 19) {
//   console.log("You are a teenager.");
// } else if (age <= 59) {
//   console.log("You are an adult.");
// } else if (age >= 60) {
//   console.log("You are a senior.");
// } else {
//   console.log("Invalid age entered.");
// }

const num = 3;
let guess = prompt("Enter your guess: ");
while (guess != num) {
  guess = prompt("Wrong guess. Please enter your guess again: ");
}
console.log("Congratulations!!!You have won.");
