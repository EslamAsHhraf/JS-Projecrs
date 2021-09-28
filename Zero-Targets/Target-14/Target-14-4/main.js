let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// [-1, -10, 10, 20, -5, -3]
let task = numsAndStrings

  .filter(function (ele) {
    return !isNaN(ele);
  })
  .map(function (ele) {
    return -ele;
  });

console.log(task);
