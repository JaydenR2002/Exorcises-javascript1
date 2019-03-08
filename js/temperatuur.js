let celsius = document.getElementById('celsius');
let fahrenheit = document.getElementById('fahrenheit');
let kelvin = document.getElementById('kelvin');
let button = document.getElementById('button');
let waarschuwing = document.getElementById('waarschuwing');

button.addEventListener("click", function(){
  if(celsius.value == ""){
    waarschuwing.innerHTML = "Graden celsius moet worden ingevoerd";
  }else if(isNaN(Number(celsius.value))){
    waarschuwing.innerHTML = "Graden moet een nummer zijn";
  }else{
    waarschuwing.innerHTML = "";
    number1 = Number(celsius.value);
    number2 = (9 * number1 / 5) + 32;
    number3 = number1 + 273;
    fahrenheit.value = number2;
    kelvin.value = number3;
  }
})
