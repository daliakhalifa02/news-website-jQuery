<?php

  $host = "localhost";
  $username = "root";
  $password = "";
  $dbname = "news";

  $connect = mysqli_connect($host, $username, $password, $dbname);
  
  $sql = "SELECT * FROM news";
  $results = mysqli_query($connect, $sql);
  $json_array = array();

  while($data = mysqli_fetch_assoc($results)){
    $json_array[] = $data;
  }
  echo json_encode($json_array)

  ?>