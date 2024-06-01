<?php
$character = 'U';
$result = " Không là nguyên âm ";
$character = strtolower($character);

switch($character)
{
    case "a":
    case "e":  
    case "i":
    case "o":
    case "u":
        $result = " Nguyên âm ";
        break;
}
echo $result;


//Các nguyên âm gồm có: a, e, i, o, u, A, E, I, O, U.