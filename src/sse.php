<?php

  date_default_timezone_set('Australia/Victoria');
  header('Content-Type: text/event-stream');
  header('Cache-Control: no-cache');

  $header = file_get_contents('header.txt');
  $body   = file_get_contents('body.txt');
  echo "event: update\n";
  echo "retry: 1000\n";
  echo 'data: {"header": "' . $header . '", "body": "' . $body . '"}';
  echo "\n\n";
