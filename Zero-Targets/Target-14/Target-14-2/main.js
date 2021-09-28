let myString = "EElllzzzzzzzeroo";

// Elzero
let arr = myString.split("").reduce(function (acc, current) {
  return acc.includes(current) ? `${acc}` : `${acc}${current}`;
});
console.log(arr);
