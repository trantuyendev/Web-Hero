<?php
$yourNumber = 361; 
// C3
$result = strlen($yourNumber."");
echo "Total: $result digits";



/* C1:
if($yourNumber < 10) $result = 1;
else if($yourNumber >= 10 && $yourNumber < 100) $result = 2;

// C2               result=0
361/10   = 36 > 0   result=1
36/10    = 3 > 0    result=2
3/10     = 0        result=3
while($yourNumber > 0){
    $yourNumber = $yourNumber / 10;
    $result++;
}*/
