let elNumber = document.getElementById("number");
let elSavedNumber = document.getElementById("saved-number");

function decrement(){
  let number = parseInt(elNumber.textContent);
  number -= 1;
  elNumber.textContent = number;
}
function increment(){
  let number = parseInt(elNumber.textContent);
  number += 1;
  elNumber.textContent = number;
}

function reset(){
  elNumber.textContent = 0;
  elSavedNumber.textContent = "Save Numbers: ";
}

function save(){
  let number = elNumber.textContent;
  let current = elSavedNumber.textContent;
  console.log(current);
  elSavedNumber.textContent = current + " " + number;
}
