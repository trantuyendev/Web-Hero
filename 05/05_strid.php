<?php
$id  = "69";
$str = "69,  1,   69 , 169 ";
$arr = explode(",", $str);
// echo '<pre style="color:red">';
// print_r($arr);
// echo '</pre>';
//$arr = [" 69 ","1 "," 69 "," 169  "];
$count = 0;
for($i = 0; $i < count($arr); $i++ ){
    if(trim($arr[$i]) == $id){
        $count+=1;
    }
}

printf("ID %s xuất hiện %d lần",$id,$count);