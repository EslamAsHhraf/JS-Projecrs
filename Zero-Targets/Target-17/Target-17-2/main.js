window.onload = function () {
  let x = document.querySelectorAll("div img");
  for (let i = 0; i < 10; i++) {
    x[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
    x[i].alt = "Elzero Logo";
  }
};
