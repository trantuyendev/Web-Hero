let ipMin = document.getElementById("min");
let ipMax = document.getElementById("max");
let btnGenerate = document.getElementById("btn-generate");
let ipResulte = document.getElementById("result");

btnGenerate.addEventListener("click", function(){
  let min = parseInt(ipMin.value);
  let max = parseInt(ipMax.value);
  let random = randomInteger(min, max);
  ipResulte.value = random;
    
})

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}