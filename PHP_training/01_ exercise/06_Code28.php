<?php
$totalSale = 90;
$commission = 0;
$result = $totalSale*$commission;
if($totalSale <= 100) {
     $commission = ($totalSale*5)/100;
}
else if($totalSale <= 300){
     $commission = ($totalSale*10)/100;
}
else ($totalSale > 300){
     $commission = ($totalSale*20)/100;
}

echo $commission;
// 5% nếu tổng doanh số bán hàng nhỏ hơn hoặc bằng 100$
// 10% nếu tổng doanh số bán hàng nhỏ hơn hoặc bằng 300$
// 20% nếu tổng doanh số bán hàng lớn hơn 300$