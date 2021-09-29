window.onload = function () {
  let Form = document.querySelector(`form`);
  let ele_count = document.querySelector(`[type="number"]`);
  let ele_text = document.querySelector(`[type="text"]`);
  let ele_type = document.querySelector(`select`);
  let results = document.querySelector(`.results`);
  Form.onsubmit = function (el) {
    el.preventDefault();
    document.querySelectorAll(".box").forEach((el) => el.remove());
    for (let i = 0; i < ele_count.value; i++) {
      console.log(ele_text.value);
      let Box = document.createElement(ele_type.value);
      Box.textContent = ele_text.value;

      Box.className = "box";
      Box.title = "element";
      Box.id = `id-${i + 1}`;

      Box.style.display = "inline-block";
      Box.style.padding = "10px";
      Box.style.color = "#fff";
      Box.style.textAlign = "center";
      Box.style.width = "150px";
      Box.style.margin = "20px";
      Box.style.backgroundColor = "#fc5a15";

      results.appendChild(Box);
    }
  };
};
