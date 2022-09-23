<?php
if (isset($_GET["id"])) {
  $host = "localhost";
  $username = "root";
  $password = "";
  $dbname = "news";

  $con = mysqli_connect($host, $username, $password, $dbname);
  if (!$con){
    die("Connection failed!" . mysqli_connect_error());
  }

  $id = $_GET["id"];
  $sql_query = "SELECT * FROM news WHERE `id` = $id";

  
  $result = [
    "Text" => $query[1],
    "Date" => $query[2],
    "Title" => $query[3],
    ];
    echo json_encode($result);
} else {
    echo json_encode(["error" => "Please specify id"]);
}

  ?>