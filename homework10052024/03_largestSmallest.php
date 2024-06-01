<?php 
$n = 60;
$max = 0;
$min = 10;

while($n > 0) {
    $digit = $n % 10; // 0
    if($digit > $max) $max = $digit;
    if($digit < $min ) $min = $digit;

    //$n = floor($n / 10);//6
}
printf("%d - %d = %d", $max, $min, $max - $min );

