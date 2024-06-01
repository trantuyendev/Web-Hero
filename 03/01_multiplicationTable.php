<?php
$number = 9;
$result = " ";
for($i = 1; $i <= 10; $i++)
{
      $result .= "$number x $i = ".$number*$i."<br/>";
}
echo $result;
