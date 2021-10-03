window.onload = function () {
  for (let i = 0; i < document.body.children.length; i++) {
    let element = document.body.children[i];
    element.onclick = () => console.log(`This Is ${element.tagName}`);
  }
};
