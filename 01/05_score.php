<?php
$scoreOne   = 5;
$scoreTwo   = 8;
$scoreThree = 5;

$max = max($scoreOne,$scoreTwo,$scoreThree);
$avg= ($scoreOne + $scoreTwo + $scoreThree)/3;

echo "Avg: ".number_format($avg,1)."<br/>";
echo "Max: ".$max;

//Avg: 6.7
//Max: 9