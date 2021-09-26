function ageInTime(theAge) {
  // Your Code Here
  if (theAge < 10 || theAge > 100)
    console.log("Age Out Of Range");
  else {
    console.log(`Months Example => ${theAge*12} Months
Weeks Example => ${theAge * 12 * 4} Weeks
Hours Example => ${theAge * 12 * 4 * 24} Hours
Mintues Example => ${theAge*12*4*24*60} Mintues
Seconds Example => ${theAge*12*4*24*60*60} Seconds`)
    }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months