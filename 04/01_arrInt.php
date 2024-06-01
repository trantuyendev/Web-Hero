<?php
/*$arrInt = [4, 2, 3, 6];
$sumEven = 0;
$sumOdd = 0;

for ($i = 0; $i < count($arrInt); $i++) {
    if ($arrInt[$i] % 2 == 0) {
        $sumEven += $arrInt[$i];
    } else {
        $sumOdd += $arrInt[$i];
    }
}*/

// cach 2
$arrInt = [3, 8, 3];
$sumEven = 0;
$sumOdd = 0;
foreach ($arrInt as $value) {
    if ($value % 2 == 0) {
        $sumEven += $value;
    } else {
        $sumOdd += $value;
    }
}
$sumAll = $sumEven + $sumOdd;
printf("sumEven = %d <br/> ", $sumEven);
printf("sumOdd = %d <br/> ", $sumOdd);
printf("sumAll = %d", $sumAll);
