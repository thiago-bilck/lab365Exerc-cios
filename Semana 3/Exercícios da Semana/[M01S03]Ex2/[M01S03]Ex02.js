const phoneNumberInput = document.getElementById("phoneNumber");
const messageInput = document.getElementById("message");
const button = document.getElementById("button");

let phoneNumber;
let message;

phoneNumberInput.addEventListener("input", (event)=> phoneNumber = event.target.value);
messageInput.addEventListener("input", (event)=> message = event.target.value);

button.addEventListener("click", (event) => window.location.href = "http://api.whatsapp.com/send?phone="+phoneNumber.replace(" ","")+"&text="+message.replace(" ", "%20"))