window.onload = function () {
  //1
  let m1 = document.getElementById("elzero");

  console.log(m1);
  //2
  let m2 = document.getElementsByName("js");
  console.log(m2[0]);
  //3
  let m3 = document.getElementsByClassName("element");
  console.log(m3[0]);
  //4
  let m4 = document.getElementsByTagName("div");
  console.log(m4[0]);
  //5
  let m5 = document.querySelector("#elzero");
  console.log(m5);
  //6
  let m6 = document.querySelector(".element");
  console.log(m6);
  //7
  let m7 = document.querySelector("[name='js']");
  console.log(m7);
  //8
  let m8 = document.querySelector("div");
  console.log(m8);
  //9
  let m9 = document.querySelectorAll("#elzero");
  console.log(m9[0]);
  //10
  let m10 = document.querySelectorAll(".element");
  console.log(m10[0]);
  //11
  let m11 = document.querySelectorAll("[name='js']");
  console.log(m11[0]);
  //12
  let m12 = document.querySelectorAll("div");
  console.log(m12[0]);
  // 13
  let m13 = document.body.firstElementChild;
  console.log(m13);
  // 14
  let m14 = document.body.children[0];
  console.log(m14);
  // 15
  let m15 = document.body.childNodes[1];
  console.log(m15);
};
