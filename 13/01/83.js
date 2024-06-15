let shape = "";
let record = "";
let height = 6;
for(let i = 1; i <=height; i++) {
    record = " ".repeat(i-1) + i;
    shape += record + "\n";
}
console.log(shape);


/*     i   x 
1      1   0
 2     2   1
  3    3   2
   4   4   3
 */