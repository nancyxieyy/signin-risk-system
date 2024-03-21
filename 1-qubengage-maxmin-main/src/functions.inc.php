<?php
function getMaxMin($items, $attendances)
{
    $item_attendances = array();
    for ($i = 0; $i < count($items); $i++) {
      $item_attendances_array = array("item"=>$items[$i], "attendance"=>$attendances[$i]);
      array_push($item_attendances,$item_attendances_array);
    }

    usort($item_attendances, function($a, $b) {
          return $b['attendance'] <=> $a['attendance'];
    });

    $max_item = $item_attendances[0]['item'] . ' - ' . $item_attendances[0]['attendance'];
    $min_item = $item_attendances[count($item_attendances)-1]['item'] . ' - ' . $item_attendances[count($item_attendances)-1]['attendance'];

    return array($max_item,$min_item);
}
