<?php
$str = "D:/Data/Doing/psd/hailan.doc";

$link = str_replace("/"," > ",$str);
$link = str_replace(":","",$link);
echo $link;

//D > Data > Doing > psd > hailan.doc