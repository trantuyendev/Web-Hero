<?php
$str = " luu truong  hai    lan   tien  ";
// $str = trim(preg_replace('/\s+/', ' ', $str));
// echo $str;
// $result = 0;

// for($i=0; $i<strlen($str);$i++){
//     if($str[$i]==" "){
//         $result +=1;
//     }
// }

// echo $result+1;
$result = str_word_count($str);
echo $result;