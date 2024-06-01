<?php
$one   = 100;
$two   = 5;
$three = 19;
$four  = 1;

$max12 = $two;
if($one > $two) $max12 = $one ;

$max34 = $three;
if($four > $three) $max34 = $four ;

$max = $max12;
if($max34 > $max12) $max = $max34 ;


printf("Max %d,%d,%d,%d: %d",$one,$two,$three,$four,$max);