let btnFontSizeDecrease = document.getElementById("btnFontSizeDecrease");
let btnFontSizeIncrease = document.getElementById("btnFontSizeIncrease");
let elmContent = document.getElementById("content");
let inputLineHeight = document.getElementById("inputLineHeight");
let slbTextAlign = document.getElementById("slbTextAlign");
let inputColor = document.getElementById("inputColor");
let elmlineHeightDisplayValue = document.getElementById("lineHeightDisplayValue");

// Lấy giá trị được lưu load vào mặc định
elmContent.style.backgroundColor = localStorage.getItem("background-color");
elmContent.style.lineHeight = localStorage.getItem("lineHeight");
elmContent.style.fontSize = localStorage.getItem("font-size") + "px";
elmContent.style.color = localStorage.getItem("color");

inputLineHeight.value  = localStorage.getItem("lineHeight");
elmlineHeightDisplayValue.textContent = localStorage.getItem("lineHeight");
slbTextAlign.value = localStorage.getItem("textAlign");



btnFontSizeDecrease.addEventListener("click", function(){
  let style = window.getComputedStyle(elmContent, null).getPropertyValue('font-size');
  let fontSize = parseFloat(style) - 1;
  elmContent.style.fontSize = fontSize + "px";
  localStorage.setItem("font-size",fontSize);

});

btnFontSizeIncrease.addEventListener("click", function(){
  let style = window.getComputedStyle(elmContent, null).getPropertyValue('font-size');
  let fontSize = parseFloat(style) + 1;
  elmContent.style.fontSize = fontSize + "px";
  localStorage.setItem("font-size", fontSize);

});

inputLineHeight.addEventListener("input", function(){
    let lineHeight = inputLineHeight.value;
    elmContent.style.lineHeight = lineHeight;
    localStorage.setItem("lineHeight", lineHeight);
    elmlineHeightDisplayValue.textContent = lineHeight;

});

slbTextAlign.addEventListener("change", function(){
    let textAlign = slbTextAlign.value;
    elmContent.style.textAlign = textAlign;
    elmContent.style.textAlign = textAlign;
    localStorage.setItem("textAlign",textAlign);

});
function changBackground(elm){
  let style = window.getComputedStyle(elm, null).getPropertyValue('background-color');
  let listButton = document.getElementsByClassName("btn-background");
  console.log(listButton);
  for(let i = 0; i < listButton.length; i ++){
    listButton[i].style.border = "none";
  }
  elm.style.border = "2px solid #fff";
  // 1. tìm tất cả elm có class là btn-background                   listButton = getElementByClassNam
  // 2. duyệt qua các phần tử trong listButton, và set border: 0px
  // 3. thêm border: 2px solid #fff; vào elm

  localStorage.setItem("background-color", style);
  elmContent.style.backgroundColor = style;
}

inputColor.addEventListener("input", function(){
  let color = inputColor.value;
  elmContent.style.color = color;
  localStorage.setItem("color",color);

});



