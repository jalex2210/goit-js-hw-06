const rangeFontSize = document.getElementById("font-size-control");
const textFontSize = document.getElementById("text");

rangeFontSize.addEventListener("input", () => {
  const fontSize = rangeFontSize.value + "px";
  textFontSize.style.fontSize = fontSize;
});
