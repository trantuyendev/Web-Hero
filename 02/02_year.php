<?php
$year = 1600;
if($year%400==0 || ($year%4==0 && $year%100!=0)) {
    echo "Năm nhuận";
} else echo "Không là năm nhuận";


//year chia hết cho 400
//year chia hết cho 4 nhưng không chia hết cho 100