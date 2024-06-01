<?php
$arrInt = [2,224,16,2];
$max = max($arrInt);
$result = "[";
for($i = 0; $i < count($arrInt); $i++ ){
    $arrInt[$i] = $max;
}
foreach($arrInt as $value){
    $result.= $value.", ";
}
$result = rtrim($result,", ");
echo $result."]";
