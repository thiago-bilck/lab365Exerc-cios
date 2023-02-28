const localStorage = window.localStorage;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  clicou();
});

function clicou() {
  localStorage.removeItem("user");
  window.location.href = "./[M01S02]Ex3.html";
}

/* login.addEventListener("click", correct);
username.addEventListener("change", handleChangeUsername);
password.addEventListener("change", handleChangePassword);

function correct() {
  if (
    user.username == userData.username &&
    user.password == userData.password
  ) {
    alert("Logado!");
  } else {
    alert("Credenciais incorretas");
  }
} */

//correct();

/*  alert(
    "O usuario que voce digitou e ",
    user.username,
    " e a senha e ",
    user.password
  ); */
