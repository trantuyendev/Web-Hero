let n = 2;
let nn = n * 11;
let nnn = n * 111;
let result = n + nn + nnn;
console.log(`${n} + ${nn} + ${nnn} = ${result}`);

let elmContent = document.getElementById("content");
console.log(elmContent);
elmContent.innerHTML = `${n} + ${nn} + ${nnn} = ${result}`;
  //1 + 11 + 111 = 123