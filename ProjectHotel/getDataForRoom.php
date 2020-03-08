<?php
$host = "localhost";
$database = "hotel"; 
$user = "mysql"; 
$password = "mysql"; 
$link = mysqli_connect($host, $user, $password, $database) or die("Ошибка " . mysqli_error($link));

if (isset($_POST['login'])) { 

    echo "LLLL";

    $login = $_POST['login'];
}

echo "LLLL";

echo $_POST['login'];

// if (isset($_POST['email'])) {
//     $email = $_POST['email'];
// }

// if (isset($_POST['phone'])) {
//     $phone = $_POST['phone'];
// }

// if (isset($_POST['name'])) {
//     $name = $_POST['name'];
// }

// if (isset($_POST['lastName'])) {
//     $lastName = $_POST['lastName'];
// }

// if (isset($_POST['birthday'])) {
//     $birthday = $_POST['birthday'];
// }

// echo $login;



header('Content-Type: application/json');  // <-- header declaration
echo json_encode($result, true);    // <--- encode
exit();

?>