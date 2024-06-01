<?php
$start = 9;
$end   = 1;
$result = "";
for($i=$start+1;$i<=$end-1;$i++)
{
    if($i%2==0) $result .= $i." ";
} 
if ($result=="") $result = " Không có ";
echo $result;

//5
//6
//7
//8
//9