const addThemeSwither = function () {
  const input = document.querySelector("input");

  const container = document.querySelector(".container");

  input.addEventListener("click", () => {
    container.classList.toggle("light__theme");
    console.log("switch");
  });
};

export default addThemeSwither();
