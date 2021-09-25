/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

console.log(my.slice(zero,my.indexOf("Gamal")).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(my.indexOf("Mazero"),counter).reverse()); // ["Elham", "Mazero"]

console.log(my[my.indexOf("Elham")].slice(zero, my[my.indexOf("Elham")].indexOf("h")) +
  my[my.indexOf("Mazero")].slice(my[my.indexOf("Mazero")].indexOf("z"))); // "Elzero"

console.log(my[my.indexOf("Mazero")].substr(my[my.indexOf("Mazero")].indexOf("r"), 1) +
my[my.indexOf("Mazero")].substr(-1).toUpperCase()); // "rO"