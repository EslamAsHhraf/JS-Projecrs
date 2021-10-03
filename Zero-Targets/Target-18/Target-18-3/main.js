window.onload = function () {
  let element = document.querySelector(".our-element");
  //start
  let start = document.createElement("div");
  start.className = "Start Element";
  start.title = "End Element";
  start.setAttribute("data-value", "Start");
  start.innerHTML = "Start";
  element.before(start);
  //end
  let end = document.createElement("div");
  end.className = "end";
  end.title = "End Element";
  end.setAttribute("data-value", "End");
  end.innerHTML = "End";
  element.after(end);
};
