<?php 
$yourNumber = 50003;
$sum = 0;
$result = "";

while($yourNumber > 0){
    $digit = $yourNumber % 10;
    $sum+=$digit;

    $result =  $digit  ."+".$result;
    $yourNumber = floor($yourNumber / 10);
}
// 1_+_4_+_5_+_
$result = substr($result, 0, -1);
print($result." = ".$sum);


