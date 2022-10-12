


let container = document.querySelector(".container");
let counter = document.createElement("div");
counter.id = "counter" ;
counter.innerHTML = "0";
counter.classList.add("counter");
container.appendChild(counter);

let btnContainer = document.createElement("div");
container.appendChild(btnContainer);
let btnDecrease = document.createElement("button");
btnDecrease.id = "decrease" ;
btnDecrease.classList.add("btn");
btnContainer.appendChild(btnDecrease);
btnDecrease.innerHTML = "-" ;

let btnReset = document.createElement("button");
btnReset.id = "reset" ;
btnReset.classList.add("btn");
btnContainer.appendChild(btnReset);
btnReset.innerHTML = "reset" ;

let btnIncrease = document.createElement("button");
btnIncrease.id = "increase" ;
btnIncrease.classList.add("btn");
btnContainer.appendChild(btnIncrease);
btnIncrease.innerHTML = "+" ;









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