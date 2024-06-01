<?php
$yourNumber = 199;
$result = 0;

if($yourNumber>=100) {
    $hundreds = (int)($yourNumber/100); // 123
    $result = $hundreds%10; // 3
}

echo $result;




/*Cho trước số nguyên yourNumber. Bạn hãy viết chương trình để xuất ra chữ số hàng trăm của số đó, nếu không có thì xuất ra 0 */