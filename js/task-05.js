const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");
nameInput.addEventListener("input", () => {
  const inputValue = nameInput.value.trim();
  if (inputValue === "") {
    nameOutput.textContent = "Anonymous"; // Si el input está vacío, muestra "Anónimo"
  } else {
    nameOutput.textContent = inputValue; // Si hay un valor en el input, muestra ese valor
  }
});
