window.onload = function () {
  let mydiv = document.createElement("div");
  mydiv.innerHTML = "10";
  document.body.appendChild(mydiv);

  function countdown() {
    mydiv.innerHTML -= 1;
    if (mydiv.innerHTML === "0") {
      location.href = "https://elzero.org/";
    }
  }
  let counter = setInterval(countdown, 1000);
};
