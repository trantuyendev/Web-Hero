
<?php 
$totalLine = 5;
$timeDoing = 4;
$priceReview = 0;

if($totalLine<10) $priceReview = 1;                        
else if ($totalLine>=10 && $totalLine<=20) $priceReview = 2;       
else if ($totalLine>20) $priceReview = 5;       

$salary = $timeDoing * 20 - $priceReview ;

echo "Salary: ".$salary."$";



//Salary: 75$