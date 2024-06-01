<?php
$yourNumber = 123;
$result = 0;
if($yourNumber>=100){
    $numberHundreds = (int)($yourNumber/100); //1
    $result = $numberHundreds%10;//1
}
echo $result;