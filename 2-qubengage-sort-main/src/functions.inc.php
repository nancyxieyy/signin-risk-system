<?php
function getSortedAttendance($items, $attendances)
{
    $item_attendances = array();
    for ($i = 0; $i < count($items); $i++) {
      $item_attendances_array = array("item"=>$items[$i], "attendance"=>$attendances[$i]);
      array_push($item_attendances,$item_attendances_array);
    }

    usort($item_attendances, function($a, $b) {
          return $b['attendance'] <=> $a['attendance'];
    });

    return $item_attendances;
}
