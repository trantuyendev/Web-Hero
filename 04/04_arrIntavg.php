<?php
$arrInt = [1, 5, 7, 4];
$max = max($arrInt);
$min = min($arrInt);
$sum = array_sum($arrInt);

// foreach($arrInt as $value){
//     $sum+=$value;
// }
$avg = ($sum - $max - $min)/(count($arrInt)-2);
echo $avg;
