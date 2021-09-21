let numOne = 9;
// Condition Output => "009"

let numTwo = 20;
// Condition Output => "020"

let numThree = 110;
// Condition Output => "110"
let x = numThree;
if (x < 10) {
    console.log(`00${x}`)
}
else if (x >= 10 && x<100) {
    console.log(`0${x}`)
}
else {
    console.log(`${x}`)
}
