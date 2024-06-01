<?php
/*$php = "PHP";
$zend = "Zend Framework";
$joomla = "Joomla";*/

// Tao mot Array trong PHP : Array laf nhieu bien

$courses = array();
//$courses[] = "PHP";
//$courses[] = "Zend Framework";
//$courses[] = "Joomla";
$lenght = count($courses);
echo $lenght;
// C1: $lenght
/*if($lenght > 0){
    echo " Khong la mang rong";
}else {
    echo " Mang rong";
}*/

// C2:empty
if(!empty($courses)){
    echo " Khong la mang rong";
} else {
    echo " Mang rong";
}