window.onload = function () {
  let Image = document.querySelectorAll("img");
  for (let i = 0; i < Image.length; i++) {
    if (Image[i].alt === "") Image[i].alt = "Elzero New";
    else Image[i].alt = "Old";
  }
};
