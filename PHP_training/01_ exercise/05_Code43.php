<?php
$coreOne   = 6;
$scoreTwo   = 9;
$scoreThree = 5;

$max = max($coreOne,$scoreTwo,$scoreThree);
$avg = ($coreOne + $scoreTwo + $scoreThree)/3;

echo "Avg: ". number_format($avg,1)."<br/>";
echo "Max: ". $max;


// Avg: 6.7
// Max: 9