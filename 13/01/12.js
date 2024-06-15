let shape = "";
let record = "";
let height = 3;
for(let i = 1; i <=height; i++) {
    record = "=".repeat(i-1) + "+".repeat((height+1)-i);
    shape += record + "\n";
}
console.log(shape);


/*    i    y
+++   1    3
=++   2    2
==+   3    1
*/