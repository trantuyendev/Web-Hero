/*
arrInt = [4, 3, 1, 2]
*/ 
let arrInt = [9, 3, 4, 2];
let max = Math.max(...arrInt);
let min = Math.min(...arrInt);
let sum = 0;
let avg = 0;
arrInt.forEach( elm => {
    sum += elm;
})
avg = ((sum - (max + min)) / (arrInt.length - 2)).toFixed(1);
console.log(avg);