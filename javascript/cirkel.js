let straal = document.getElementById('straal');
let oppervlakte = document.getElementById('oppervlakte');
let omtrek = document.getElementById('omtrek');
let button = document.getElementById('button');
let waarschuwing = document.getElementById('waarschuwing');

button.addEventListener("click", function(){
  if(straal.value == ""){
    waarschuwing.innerHTML = "Straal moet worden ingevoerd";
  }else if(isNaN(Number(straal.value))){
    waarschuwing.innerHTML = "Straal moet een nummer zijn";
  }else{
    waarschuwing.innerHTML = "";
    number1 = Number(straal.value);
    number2 = 3.14 * number1 * number1;
    number3 = 2 * 3.14 * number1 ;
    oppervlakte.value = number2;
    omtrek.value = number3;
  }
})
