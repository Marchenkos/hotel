<?php
$host = "localhost";
$database = "hotel"; 
$user = "mysql"; 
$password = "mysql"; 
$link = mysqli_connect($host, $user, $password, $database) or die("Ошибка " . mysqli_error($link));

$recText = $_POST['text'];

$query = "INSERT INTO test (topic) VALUES ('kisa')";

if (mysqli_query($link, $query)) {
    echo "Success";
} else {
    echo "Fall out";
}
?>