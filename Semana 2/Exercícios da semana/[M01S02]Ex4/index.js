const localStorage = window.localStorage;

var user = {
  username: "",
  password: "",
  url: "https://this-person-does-not-exist.com/img/avatar-1142ff7c1012530aa8da871173acccac.jpg",
  name: "Mario da Silva",
  email: "mariodasilva@gmail.com",
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
    window.location.href = "./logged.html";
  } else {
    alert("Credenciais incorretas");
  }
}
