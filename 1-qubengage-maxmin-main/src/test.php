<?php
require('functions.inc.php');

$items = array("Item_1", "Item_2", "Item_3", "Item_4");
$attendances = array(10, 20, 30, 40);

$result = getMaxMin($items, $attendances);

echo "Max Item: " . $result[0] . "\n";
echo "Min Item: " . $result[1] . "\n";
?>
