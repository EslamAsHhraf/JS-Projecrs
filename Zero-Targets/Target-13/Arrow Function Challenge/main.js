/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

// let names = function (...name) {
//   // Parameter ?
//   return `String [${name.join("], [")}] => Done !`;
// };

let names = (...name) => `String [${name.join("], [")}] => Done !`;

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];
let calc = function (one, two, ...nums) {
  return (two - one + two - one) * nums[nums.length - nums.length].length;
};
// let calc = (one, two, ...nums) =>
//   (two - one + two - one) * nums[nums.length - nums.length].length;
console.log(
  calc(10, myNumbers[myNumbers.length - myNumbers.length], myNumbers)
); // 80
