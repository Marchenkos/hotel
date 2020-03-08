<?php
    $host = "localhost";
    $database = "hotel"; 
    $user = "mysql"; 
    $password = "mysql"; 
    $link = mysqli_connect($host, $user, $password, $database) or die("Ошибка " . mysqli_error($link));

    if (isset($_POST['regData'])) {
        $regData = json_decode( $_POST['regData'], true );

        $email = $regData['email'];
        $name = $regData['name'];
        $login = $regData['login'];
        $lastName = $regData['lastName'];

        $query = "INSERT INTO user_information (user_name, email, first_name, last_name) VALUES ('$login', '$email', '$name', '$lastName')";
        $result = mysqli_query($link, $query) or die("Ошибка выполнения запроса" . mysqli_error($link));
        mysqli_close($link);
        header("Access-Control-Allow-Origin: *");
        echo json_encode(array("result"=>$regData));
    }
?>