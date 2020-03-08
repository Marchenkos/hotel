<?php
    $host = "localhost";
    $database = "hotel"; 
    $user = "mysql"; 
    $passwordDb = "mysql"; 
    $link = mysqli_connect($host, $user, $passwordDb, $database) or die("Ошибка " . mysqli_error($link));

    if (isset($_POST['regData'])) {
        $regData = json_decode( $_POST['regData'], true );

        $userName = $regData['user'];
        $userPassword = $regData['password'];

        if (!preg_match("/^[a-zA-Z0-9]+$/",$userName)) {
            $err[] = "Логин может состоять только из букв английского алфавита и цифр";
        }

        if (strlen($userPassword) < 3 or strlen($userPassword) > 30) {
            $err[] = "Логин должен быть не меньше 3-х символов и не больше 30";
        }

        $query = mysqli_query($link, "SELECT id FROM users WHERE userName='$userName'");

        if (mysqli_num_rows($query) > 0) {
            $err[] = "Пользователь с таким логином уже существует в базе данных";
        }

        if (count($err) == 0) {

            $hashPassword = md5(md5(trim($userPassword)));

            mysqli_query($link,"INSERT INTO users (userName, password) VALUES ('$userName', '$hashPassword')");
            header("Access-Control-Allow-Origin: *");
            echo json_encode(array("result"=>[true]));

            exit();
        }
        else {
            header("Access-Control-Allow-Origin: *");
            echo json_encode(array("result"=>[false, $err]));

            exit();
        }
    }
?>