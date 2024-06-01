<?php
$yourNumber = -10;
$str1 = "dương";
$str2 = "chẵn";
if ($yourNumber < 0) $str1 = "âm";
if ($yourNumber % 2 !=0) $str2 = "lẻ";
//echo " Số nguyên ".$str1." ".$str2; 
printf("Số nguyên %s %s",$str1,$str2);
