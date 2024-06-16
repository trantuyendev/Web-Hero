//F(n) = n x (n-1) x … x 2 x 1
let n = 6;
let multi = 1;
let result = "";
for(let i = n; i >= 1 ; i --){
    multi *=i;
    result += i + " x ";
}
result = result.slice(0, -3) + " = " + multi; 
console.log(result);
