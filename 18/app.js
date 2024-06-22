let btnFontSizeDecrease = document.getElementById("btnFontSizeDecrease");
let btnFontSizeIncrease = document.getElementById("btnFontSizeIncrease");
let elmContent = document.getElementById("content");
let inputLineHeight = document.getElementById("inputLineHeight");
let slbTextAlign = document.getElementById("slbTextAlign");
let inputColor = document.getElementById("inputColor");

// Lấy giá trị được lưu load vào mặc định
elmContent.style.backgroundColor = localStorage.getItem("background-color");

btnFontSizeDecrease.addEventListener("click", function(){
  let style = window.getComputedStyle(elmContent, null).getPropertyValue('font-size');
  let fontSize = parseFloat(style) - 1;
  elmContent.style.fontSize = fontSize + "px";

});

btnFontSizeIncrease.addEventListener("click", function(){
  let style = window.getComputedStyle(elmContent, null).getPropertyValue('font-size');
  let fontSize = parseFloat(style) + 1;
  elmContent.style.fontSize = fontSize + "px";

});

inputLineHeight.addEventListener("input", function(){
    let lineHeight = inputLineHeight.value;
    elmContent.style.lineHeight = lineHeight;

});

slbTextAlign.addEventListener("change", function(){
    let textAlign = slbTextAlign.value;
    elmContent.style.textAlign = textAlign;

});
function changBackground(elm){
  let style = window.getComputedStyle(elm, null).getPropertyValue('background-color');
  // 1. tìm tất cả elm có class là btn-background                   listButton = getElementByClassNam
  // 2. duyệt qua các phần tử trong listButton, và set border: 0px
  // 3. thêm border: 2px solid #fff; vào elm

  localStorage.setItem("background-color", style);
  elmContent.style.backgroundColor = style;
}

inputColor.addEventListener("input", function(){
  let color = inputColor.value;
  console.log(color);
  elmContent.style.color = color;

});



