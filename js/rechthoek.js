let lengte = document.getElementById('lengte');
let breedte = document.getElementById('breedte');
let oppervlakte = document.getElementById('oppervlakte');
let omtrek = document.getElementById('omtrek');
let button = document.getElementById('button');
let waarschuwing = document.getElementById('waarschuwing');

button.addEventListener("click", function(){
  if(lengte.value == "" || breedte.value == ""){
    waarchuwing.innerHTML = "Lengte of breedte is niet ingevult"
  }else if(isNaN(Number(lengte.value)) || isNaN(Number(breedte.value))){
    waarschuwing.innerHTML = "Lengte en breedte moeten nummers zijn";
  }else{
    number1 = Number(lengte.value);
    number2 = Number(breedte.value);
    number3 = number1 * number2;
    number4 = 2 * number1 + 2 * number2;
    oppervlakte.value = number3;
    omtrek.value = number4;
  }
})
