window.onload = function () {
  let promtmsg = prompt("Print Number From – To", "Example: 5-20");
  let Number = promtmsg.trim().split("-");
  for (let i = parseInt(Number[0]); i <= parseInt(Number[1]); i++) {
    let myspan = document.createElement("div");
    myspan.innerHTML = i;
    document.body.appendChild(myspan);
  }
};
