window.onload = function () {
  let one = document.querySelector(".one");
  let two = document.querySelector(".two");
  let two_title = two.title;
  let two_text = two.textContent;

  two.textContent = one.textContent;
  one.textContent = two_text;

  two.title = one.title;
  one.title = two_title;
};
