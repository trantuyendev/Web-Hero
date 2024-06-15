let shape = "";
let record = "";
let height = 9;
for(let i = 1; i <=height; i++) {
    record = " ".repeat(height-i) + (i+"").repeat(i*2-1) + " ".repeat(height-i);
    shape += record + "\n";
}
console.log(shape);


/*         i     y
###1###    1     1   
##222##    2     3
#33333#    3     5
4444444    4     7
 */ 