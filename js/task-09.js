function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorsBody = document.querySelector(".color");
const changeColor = document.querySelector(".change-color");

changeColor.addEventListener("click", () => {
  const otherColor = getRandomHexColor();

  document.body.style.backgroundColor = otherColor;
  colorsBody.textContent = otherColor;
});