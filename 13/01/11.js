let shape = "";
let record = "";
let height = 5;
for(let i = 1; i <=height; i++) {
    record = "=".repeat(height - i) + "+".repeat(i);
    shape += record + "\n";
}
console.log(shape);
/*       i x y
====+    1 4 1
===++    2 3 2
==+++    3 2 3
=++++    4 1 4
+++++
*/
