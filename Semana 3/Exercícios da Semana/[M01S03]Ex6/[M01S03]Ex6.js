let cardNumberInput = document.getElementById("cardNumber");
let nameInput = document.getElementById("name");

let statusInput = document.getElementById("status");
let speciesInput = document.getElementById("species");
let genderInput = document.getElementById("gender");
let originInput = document.getElementById("origin");
let locationInput = document.getElementById("location");



async function searchData (id){
  try{
    const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const body = await data.json();
    console.log(body)
    cardNumberInput.value = body.id
    nameInput.value = body.name
    statusInput.value = body.status
    speciesInput.value = body.species
    genderInput.value = body.gender
    originInput.value = body.origin.name
    locationInput.value = body.location.name


  } catch(e){

  }finally{

  }
}

cardNumberInput.addEventListener("input", (e) =>{
    const id = e.target.value
    if (id<1 || id> 800){
        cardNumberInput.value = 1
        alert("Digite um número entre 1 e 800")
        return 
    }
    
    searchData(id)  
})