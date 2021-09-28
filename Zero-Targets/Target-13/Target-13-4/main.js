function specialMix(...data) {
  // Your Code Here
  let result = 0;
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    if (!Number.isNaN(parseInt(data[i]))) {
      result += parseInt(data[i]);
    } else {
      count++;
    }
  }
  if (count === data.length) {
    return "All Is Strings";
  } else return result;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10 Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
