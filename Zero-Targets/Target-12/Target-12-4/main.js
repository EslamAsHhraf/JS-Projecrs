function checkStatus(a, b, c) {
  let name = typeof a==="string"? a:typeof b==="string"? b:c;
  let num = typeof a==="number"? a:typeof b==="number"? b:c;
  let flag = typeof a === "boolean" ? a : typeof b === "boolean" ? b : c;
  if (flag)
    console.log(`Hello ${name}, Your Age Is ${num}, You Are Available For Hire`);
  else
    console.log(`Hello ${name}, Your Age Is ${num}, You Are Not Available For Hire`);
}
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"