


function spawn_element(parentNode, tagName, id, classes, style, innerHtml, clickEvent) {
    var el = document.createElement(tagName);
    if (id) el.id = id;
    if (classes) classes.forEach(c => el.classList.add(c));
    if (style) el.style = style;
    if (innerHtml) el.innerHTML = innerHtml;
    if (clickEvent) el.addEventListener("click", clickEvent);
    parentNode.appendChild(el);
    return el;
}
let container = document.querySelector(".container")
let newElement = spawn_element(container, "div", "counter", ["counter"], null, "0" );
let btnContainer = spawn_element(container, "div", );
let btnDecrease = spawn_element(btnContainer, "button","decrease", ["btn"], null,"-");
let btnReset = spawn_element(btnContainer, "button","btnReset", ["btn"], null,"reset");
let btnIncrease = spawn_element(btnContainer, "button","increase", ["btn"], null,"+");



const btns = document.querySelectorAll(".btn");

let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const id = e.currentTarget.id;

    if (id.includes("increase")) {
      count++;
      counter.classList.add("up");

      setTimeout(() => {
        counter.classList.remove("up");
      }, 500);
    } else if (id.includes("decrease")) {
      count--;
      counter.classList.add("down");

      setTimeout(() => {
        counter.classList.remove("down");
      }, 500);
    } else {
      count = 0;
    }

    if (count > 0) {
      counter.style.color = "green";
    }

    if (count < 0) {
      counter.style.color = "red";
    }

    if (count === 0) {
      counter.style.color = "grey";
    }

    counter.textContent = count;
  });
});