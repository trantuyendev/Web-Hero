/*
arrInt = [2,224,16,2]
[224, 224, 224, 224]
*/ 

let arrInt = [2,224,16,2];
let max = Math.max(...arrInt);
arrInt.forEach(function(part, index) {
    arrInt[index] = max;
  });
console.log(arrInt);

