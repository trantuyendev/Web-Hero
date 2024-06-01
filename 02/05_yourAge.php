<?php
$yourAge = 98;
define("LIMIT_AGE_VIEW_FILM", 15);

$nameFilm = " Thế giới lập trình ";
$result = "Bạn không được xem phim ";
if($yourAge>LIMIT_AGE_VIEW_FILM ){
    $result = "Bạn được xem phim ";
} 
echo $result.$nameFilm;