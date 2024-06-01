<?php
$str = "php/12/frontend/30/javascript/140/python/140";
$arr = explode("/", $str);
echo '<pre style="color:red">';
print_r($arr);
echo '</pre>';
$max = $arr[1];
$result = "";
for($i = 1; $i <count($arr); $i+=2){
    if($arr[$i] > $max){
        $max = $arr[$i];          
    } 
}
for($i = 1; $i <count($arr); $i+=2){
    if($arr[$i] == $max){ 
        $result.= $arr[$i-1].": ".$max."<br/>";       
    } 
}
echo $result;


