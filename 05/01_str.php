<?php
$str = "%$&^(|";
$result = "false";
for($i=0;$i<strlen($str); $i++){
    if(ctype_digit($str[$i])) {
        $result = "true";
        break;
    } 
}
echo $result;