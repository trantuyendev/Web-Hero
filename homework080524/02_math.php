<?php
$numberOne = 30;
$numberTwo = 0;
$math = "%";
$result = "Không thực hiện được, phép tính không hợp lệ";
$isCaculate = true;

switch ($math)
{
    case "+":
        $result = $numberOne + $numberTwo;
        break;
    case "-":
        $result = $numberOne - $numberTwo;
        break;
    case "*":
    case "x":
        $result = $numberOne * $numberTwo;
        break;
    case "/":
    case ":":
        if($numberTwo == 0){
            $result = "Không thể chia cho 0";
           $isCaculate = false;
        }else {
            $result = $numberOne / $numberTwo;
        }
        break;
    case "%":
        if($numberTwo == 0){
            $result = "Không thể chia cho 0";
            $isCaculate = false;
        }else {
            $result = $numberOne % $numberTwo;
        }
        break;
    default:
        $isCaculate = false;
    
}
if($isCaculate  == true) {
    printf("%d %s %d = %d", $numberOne, $math, $numberTwo, $result );
}else {
    printf($result );
}


//Cho trước hai số nguyên numberOne, numberTwo và một phép toán math. Bạn hãy viết chương trình để in ra các phép toán được kết hợp từ numberOne, numberTwo và math

