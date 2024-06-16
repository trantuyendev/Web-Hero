let shape = "";
let record = "";
let height = 7;
for(let i = 1; i <=height; i++) {
    let icon = "#";
    if(i % 2 != 0)  icon = "o";
    record = " ".repeat(height - i) + (i + icon).repeat(i);
    record = record.slice(0, -1);
    shape += record + "\n";
}
for(i = 1; i < height/2; i++) {
    record = " ".repeat((height+1)/2) + "|" + " ".repeat(height - 4) + "|";
    shape += record + "\n";
}


shape += "-".repeat(2 * height - 1);

console.log(shape);
/*                i       x     
    1             1       1#     lap 1       4
   2#2            2       2#    lap 2        3
  3o3o3           3       3#    lap 3        2
 4#4#4#4          4       4#    lap 4        1
5o5o5o5o5                                    0
   | |
   | |
---------
*/