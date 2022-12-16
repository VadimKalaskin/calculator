import addThemeSwither from "./themeSwicher.js";
//не работает последовательно несколько команд. например, 5*3-2 вернёт 1.

const buttons = document.querySelectorAll(".button");
let result = document.querySelector(".result");

let numberInMemory = 0;
let actionInMemory = "";

for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  button.addEventListener("click", function (e) {
    e.preventDefault();
    if (button.classList.contains("clear")) {
      result.innerHTML = "";
      numberInMemory = "";
      actionInMemory = "";
      return;
    }
    if (button.classList.contains("percent")) {
      result.innerHTML /= 100;
      return;
    }
    if (button.classList.contains("deviding")) {
      numberInMemory = result.innerHTML;
      actionInMemory = button.innerHTML;
      result.innerHTML = "";
      return;
    }
    if (button.classList.contains("multiplication")) {
      numberInMemory = result.innerHTML;
      actionInMemory = button.innerHTML;
      result.innerHTML = "";
      return;
    }
    if (button.classList.contains("plus")) {
      numberInMemory = result.innerHTML;
      actionInMemory = button.innerHTML;
      result.innerHTML = "";
      return;
    }
    if (button.classList.contains("plus-minus")) {
      numberInMemory = result.innerHTML;
      actionInMemory = button.innerHTML;
      result.innerHTML = -result.innerHTML;
      return;
    }
    if (button.classList.contains("minus")) {
      numberInMemory = result.innerHTML;
      actionInMemory = button.innerHTML;
      result.innerHTML = "";
      return;
    }

    if (button.classList.contains("resultation")) {
      if (actionInMemory === "/") {
        result.innerHTML = Number(numberInMemory) / Number(result.innerHTML);
        numberInMemory = result.innerHTML;
        return;
      }
      if (actionInMemory === "X") {
        result.innerHTML = Number(numberInMemory) * Number(result.innerHTML);
        numberInMemory = result.innerHTML;
        return;
      }
      if (actionInMemory === "+") {
        result.innerHTML = Number(numberInMemory) + Number(result.innerHTML);
        numberInMemory = result.innerHTML;
        return;
      }
      if (actionInMemory === "-") {
        result.innerHTML = Number(numberInMemory) - Number(result.innerHTML);
        numberInMemory = result.innerHTML;
        return;
      }
    }

    result.innerHTML += button.innerHTML;
  });
}
