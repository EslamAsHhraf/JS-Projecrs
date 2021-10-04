window.onload = function () {
  setTimeout(function () {
    let parent = document.createElement("div");
    parent.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    text-align: center;
    background-color: #f5f3f4;
    width: 400px;`;
    document.body.appendChild(parent);
    let myh2 = document.createElement("h2");
    myh2.innerHTML = "Welcom";
    parent.appendChild(myh2);
    let myp = document.createElement("p");
    myp.innerHTML = "Welcom To Zero Web School";
    parent.appendChild(myp);
    let myspan = document.createElement("span");
    myspan.innerHTML = "x";
    myspan.style.cssText = `  background-color: red;
    width: 20px;
    right: -10px;
    top: -10px;
    height: 20px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    position: absolute;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    color: white;
    `;
    myspan.className = "exit";
    parent.appendChild(myspan);
    // let ele = document.querySelector(".exit");
    myspan.onclick = function () {
      parent.style.display = "none";
    };
  }, 5000);
};
