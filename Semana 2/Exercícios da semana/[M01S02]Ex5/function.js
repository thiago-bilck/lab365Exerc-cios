/* Crie um cronômetro usando javascript que seja executado por um botão, conte 10 segundos,
 e no fim imprima um texto: 'Seu tempo acabou!! Tente novamente!!'. */

function timer() {
  let count = 0;
  let timer = setInterval(function () {
    count++;
    if (count > 10) {
      clearInterval(timer);
      alert("Seu tempo acabou, tente novamente!");
    } else {
      document.getElementById("timer").innerHTML =
        "Contando:" + count + "segundos";
    }
  }, 1000);
}
