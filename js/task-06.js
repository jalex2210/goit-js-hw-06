const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", () => {
  const inputLength = validationInput.value.length;
  const expectInput = parseInt(validationInput.getAttribute("data-length"));

  if (inputLength === expectInput) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
