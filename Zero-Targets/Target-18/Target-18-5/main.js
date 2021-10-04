window.onload = function () {
  let mydiv = document.createElement("div");
  mydiv.innerHTML = "10";
  document.body.appendChild(mydiv);

  function countdown() {
    mydiv.innerHTML -= 1;
    if (mydiv.innerHTML === "5") {
      window.open(
        "https://elzero.org/",
        "_blank",
        "width=400,height=400,left=200,top=10"
      );
    } else if (mydiv.innerHTML === "0") {
      clearInterval(counter);
    }
  }
  let counter = setInterval(countdown, 1000);
};
