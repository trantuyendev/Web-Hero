<?php
$year = 100;
$month = 2;
$day = 0;
switch($month)
{
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        $day = 31;
        break;
    case 4:
    case 6:
    case 9:    
    case 11:
        $day = 30;
        break;
    case 2:
        $day = 28;
        if ($year%400==0 || ($year%4==0 && $year%100!=0)) {
            $day = 29;
        }
        break;
    
}
printf("Tháng %d năm %d có %d ngày",$month,$year,$day);


/*Tháng 1, 3, 5, 7, 8, 10, 12 có 31 ngày. 
Tháng 4, 6, 9, 11 có 30 ngày. 

Tháng 2 năm nhuận có 29 ngày, tháng 2 năm không nhuận có 28 ngày. Năm nhuận là năm thỏa mãn một trong hai điều kiện sau:
Chia hết cho 400
Chia hết cho 4 nhưng không chia hết cho 100 
Tháng 2 năm 2022 có 28 ngày.*/