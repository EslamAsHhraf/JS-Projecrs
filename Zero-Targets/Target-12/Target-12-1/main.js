function sayHello(theName, theGender) {
  // Your Code Here
  if ( theGender === undefined)
    console.log(`Hello ${theName}`);
  else if (theGender === "Male")
    console.log(`Hello Mr ${theName}`);
  else if (theGender === "Female")
    console.log(`Hello Miss ${theName}`);
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"