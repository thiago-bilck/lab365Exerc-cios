const localStorage = window.localStorage;

const user = JSON.parse(localStorage.getItem("user"));

const urlInput = document.getElementById("url");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const saveButton = document.getElementById("save");
urlInput.value = user.url;
nameInput.value = user.name;
emailInput.value = user.email;
const handleChangeUrl = (event) => {
  //console.log(event);
  user.url = event.target.value;
};
const handleChangeName = (event) => {
  //console.log(event);
  user.name = event.target.value;
};
const handleChangeEmail = (event) => {
  //console.log(event);
  user.email = event.target.value;
};

urlInput.addEventListener("input", handleChangeUrl);
nameInput.addEventListener("input", handleChangeName);
emailInput.addEventListener("input", handleChangeEmail);

saveButton.addEventListener("click", (e) => {
  e.preventDefault();
  save();
});

function save() {
  localStorage.setItem("user", JSON.stringify(user));
  alert("Dados alterados com sucesso!");
}

/* form.addEventListener("submit", (e) => {
  e.preventDefault();
  clicou();
}); */

/* function clicou() {
  const db = userData;
  if (user.username == db.username && user.password == db.password) {
    alert("Você está logado!");
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "./logged.html";
  } else {
    alert("Credenciais incorretas");
  }
} */

/*tenho ainda que criar os event listener dos inputs
e guarda estes dados em localStorage*/

/* urlInput.addEventListener("input", handleChangeUrl);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  clicou();
});*/

const logoutButton = document.getElementById("logout");

logoutButton.addEventListener("click", (e) => {
  e.preventDefault();
  logout();
});

function logout() {
  localStorage.removeItem("user");
  window.location.href = "./index.html";
}
