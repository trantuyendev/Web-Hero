let elNumber = document.getElementById("number");
let elSavedNumber = document.getElementById("saved-number");
let btnDecrease = document.getElementById("btn-decrease");
let btnReset = document.getElementById("btn-reset");
let btnIncrease = document.getElementById("btn-increase");
let btnSave = document.getElementById("btn-save");

btnDecrease.addEventListener("click", function () {

	changeNumber("decrease");
});

btnReset.addEventListener("click", function () {
	elNumber.textContent = 0;
	elSavedNumber.textContent = "Save Numbers: ";
});

btnIncrease.addEventListener("click", function () {
	changeNumber("increase");
});

btnSave.addEventListener("click", function () {
	let number = elNumber.textContent;
	let current = elSavedNumber.textContent;
	console.log(current);
	elSavedNumber.textContent = current + " " + number;
});
function changeNumber(action) {
	let number = parseInt(elNumber.textContent);
	if(action == "increase"){
		number += 1;
	} else if(action == "decrease"){
		number -= 1;
	}
	elNumber.textContent = number;
	
}