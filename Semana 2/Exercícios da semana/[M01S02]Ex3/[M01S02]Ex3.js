const localStorage = window.localStorage;

var user = {
  username: "",
  password: "",
};

var userData = {
  username: "Mario da Silva",
  password: "1234",
};

let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");

const handleChangeUsername = (event) => {
  //console.log(event);
  user.username = event.target.value;
};
const handleChangePassword = (event) => {
  user.password = event.target.value;
  //console.log(user.password);
};

usernameInput.addEventListener("input", handleChangeUsername);
passwordInput.addEventListener("input", handleChangePassword);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  clicou();
});

function clicou() {
  const db = userData;
  if (user.username == db.username && user.password == db.password) {
    alert("Você está logado!");
    localStorage.setItem("user", JSON.stringify(user));
  } else {
    alert("Credenciais incorretas");
  }
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
