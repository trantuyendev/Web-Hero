<?php
//Cho trước số nguyên dương n (n >= 10). Bạn hãy viết chương trình để in ra chữ số đầu tiên và chữ số cuối cùng của n
$n = 54123; 

$first = substr($n."", 0, 1);
$last = $n % 10; // 3

printf("First = %d <br/> Last = %d",$first,$last);