let myArray = ["E", "l", "z", ["e", "r"], "o"];
// Elzero
let names = myArray.reduce(function (acc, current) {
  if (Array.isArray(current)) return `${acc}${current.join("")}`;
  else return `${acc}${current}`;
});
console.log(names);
