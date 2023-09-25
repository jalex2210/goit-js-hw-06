const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const emailUser = loginForm.elements.email;
  const passwordUser = loginForm.elements.password;

  const emailValidator = emailUser.value.trim();
  const passwordValidator = passwordUser.value.trim();

  if (emailValidator === "" || passwordValidator === "") {
    alert("All spaces must be filled");
  } else {
    const formUser = {
      email: emailValidator,
      password: passwordValidator,
    };
    console.log(formUser);
    loginForm.reset();
  }
});
