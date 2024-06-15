let numberOne = 6;
let numberTwo = 3;
let math = "/";
let result = 0;
if( numberTwo == 0 && (math == "%" || math == "/" || math == ":" )){
    console.log("Khong thuc  hien duoc");
} else {
    switch (math) {
        case "+":
            result = numberOne + numberTwo;
            break;
        case "-":
            result = numberOne - numberTwo;
            break;
        case "*":
        case "x":
            result = numberOne * numberTwo;
            break; 
        case "/":
        case ":":
            result = numberOne / numberTwo;
            break; 
        case "%":
            result = numberOne % numberTwo;
            break; 
    }
    console.log(`${numberOne}  ${math}  ${numberTwo} = ${result}`);
}
