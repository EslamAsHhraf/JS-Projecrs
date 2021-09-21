let num1 = 9;
let str = 9;
let num2 = "20";

// Output
if (num1 == str) {
    console.log("{num1} Is The Same Value As {str}");
}

if (num1 == str && typeof num1 != typeof str) {
    console.log("{num1} Is The Same Value As {str} But Not The Same Type");
}
if (num1 != num2 ||  typeof num1 == typeof str) {
    console.log("{num1} Is Not The Same Value Or The Same Type As {num2}");
}


