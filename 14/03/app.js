let btnSum = document.getElementById("btn-sum");
let btnSubtract = document.getElementById("btn-subtract");
let btnMultiply = document.getElementById("btn-multiply");
let btnDivide = document.getElementById("btn-divide");
let ipNumberOne = document.getElementById("number-one");
let ipNumberTwo = document.getElementById("number-two");
let elmResult = document.getElementById("result");


btnSum.addEventListener("click", function () {
	calculate("+");
});

btnSubtract.addEventListener("click", function () {
	calculate("-");
});
btnMultiply.addEventListener("click", function () {
	calculate("x");
});
btnDivide.addEventListener("click", function () {
	calculate("/");
});
function calculate(action) {
	let result = 0;
	let notify = "";
	let numberOne = parseInt(ipNumberOne.value);
	let numberTwo = parseInt(ipNumberTwo.value);

	switch (action) {
		case "+":
			result = numberOne + numberTwo;
			break;
		case "-":
			result = numberOne - numberTwo;
			break;
		case "x":
			result = numberOne * numberTwo;
			break;
		case "/":

			if (numberTwo == 0) {
				notify  = "Khong Thuc Hien Duoc";
			} else{
				result = (numberOne / numberTwo).toFixed(2);			
			}
			break;
	}
	if( notify == ""){
		notify = `${numberOne} ${action} ${numberTwo} = ${result}`;
	}
	elmResult.textContent = notify;
}

