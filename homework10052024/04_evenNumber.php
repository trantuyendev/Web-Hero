<?php
$n = 20090;
$result = "Yes";

while($n > 0) {
    $digit = $n % 10; // 2  7  6  1
    if($digit %2 != 0){
        $result = "No";
        break;
    }
    $n = floor($n / 10);
    echo $digit."<br/>";
}
echo $result;

