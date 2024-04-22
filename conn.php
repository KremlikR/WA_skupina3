<?php

$username = "lm";
$passwd = "joouda";

$servername = "127.0.0.1:3306";
$usernameDb = "root";
$password = "jooouda";
$dbname = "crmskchccz";
$conn = new mysqli($servername, $usernameDb, $password, $dbname);
$conn->query("set names utf8");

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
  exit();
}