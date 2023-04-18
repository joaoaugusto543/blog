<?php

header('Access-Control-Allow-Origin: *');

  $categories = [
    'PHP',
    'HTML',
    'CSS',
    'JavaScript',
    'Bootstrap',
    'Java',
    'C#'
  ];

  die(json_encode($categories))
  
?>