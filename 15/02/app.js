
let colorCharacters = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let elmColorBox = document.getElementById("color-box");
let elmColorText = document.getElementById("color-text");
let btnRandom = document.getElementById("btn");

btnRandom.addEventListener("click", function () {
	let color = "#";

	for (let i = 1; i <= 6; i++){
		let randomIndex = randomInteger(0, colorCharacters.length - 1);
		color += colorCharacters[randomIndex];
	}
	elmColorBox.style.backgroundColor = color;
	elmColorText.textContent = color;
});

elmColorText.addEventListener("click", function(){
	navigator.clipboard.writeText(elmColorText.textContent);
	alert("Ma mau :" + elmColorText.textContent + "da copy thanh cong");
	
});

function randomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


