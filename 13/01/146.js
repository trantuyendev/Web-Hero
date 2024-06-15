let n = 9852;
let max = 0;
let min = 9;
let result = 0;
while(n>0){
    let digit = n % 10;
    n = Math.floor(n / 10);
    console.log(digit);
    if(digit > max) max = digit;
    if(digit < min) min = digit;
}
result = max - min;
console.log(`${max} - ${min} = ${result}`);

	


