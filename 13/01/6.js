let shape = "";
let record = "";
let height = 5;
for(let i = 1; i <=height; i++) {
    record = i + "+".repeat(i);
    shape += record + "\n";
}
console.log(shape);
/*
1+ 
2++
3+++
4++++
5+++++
*/