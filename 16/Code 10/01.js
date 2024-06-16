//F(n) = 1 + 2 + … + (n - 1) + n
let n = 6;
let sum = 0;
let result = "";
for(let i = 1; i <= n; i ++){
    sum +=i;
    result += i + " + ";
}
result = result.slice(0, -3) + " = " + sum; 
console.log(result);
