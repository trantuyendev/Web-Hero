<?php 
//             0  1   2  3  4
$score      = [2, 19, 8, 4, 19];
$student    = ["Han", "Dũng", "Linh", "Cường", "Lan"];

$index      = 0;
$max        = max($score);
$result = "";
for($i=0; $i<count($score); $i++){
    if($score[$i] == $max) {
        $result.= $student[$i].", ";
    }
}
$result = rtrim($result,", ");
echo "HV có điểm cao nhất - ".$result.": ".$max;
//printf("HV có điểm cao nhất - %s: %d", $student[$index], $score[$index] );


//HV có điểm cao nhất - Lan: 10