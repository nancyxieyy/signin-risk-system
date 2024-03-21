<?php
require('functions.inc.php');

$items = array("Item_1", "Item_2", "Item_3", "Item_4");
$attendances = array(10, 20, 30, 40);

$result = getSortedAttendance($items, $attendances);

?>
