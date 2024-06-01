<?php
$result = " ";
for($i=2;$i<10; $i++)
{
    for($j=1;$j<=10;$j++)
    {
          $result .= $i * $j. " ";
    }
    $result .= "<br/>";
}
echo $result;

