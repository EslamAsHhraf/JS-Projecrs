window.onload = function () {
  let input = document.querySelector("[type='number']");
  let change = document.querySelector(".result");

  input.oninput = function () {
    change.innerHTML = `{${input.value}} USD Dollar = {${(
      input.value * 15.6
    ).toFixed(2)}} Egyptian Pound`;
  };
};
