const classesToAdd = document.querySelector(".classes-to-add");
const classesToRemove = document.querySelector(".classes-to-remove");
const classesList = document.querySelector(".classes-list h5+div");
// add classes
classesToAdd.onblur = function () {
  if (classesToAdd.value !== "") {
    const theClasses = classesToAdd.value.trim().split(" ");
    classesToAdd.value = "";
    for (const theClass of theClasses) {
      if (theClass === "") continue;
      classesList.classList.add(theClass.toLowerCase());
    }
  }
  listClasses();
};
// remove classes
classesToRemove.onblur = function () {
  if (classesToRemove.value !== "") {
    const theClasses = classesToRemove.value.trim().split(" ");
    classesToRemove.value = "";
    for (const theClass of theClasses) {
      classesList.classList.remove(theClass.toLowerCase());
    }
  }
  listClasses();
};
// show classes
function listClasses() {
  classesList.innerHTML = "";
  let theClassesList = classesList.classList.toString().split(" ").sort();
  for (const theClass of theClassesList) {
    if (theClass !== "") {
      const myspan = document.createElement("span");
      myspan.textContent = theClass;
      classesList.appendChild(myspan);
    }
  }
  classesList.hasChildNodes()
    ? ""
    : (classesList.innerHTML = `No Classes To Show`);
}
listClasses();
