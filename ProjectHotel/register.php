<?php
    header("Access-Control-Allow-Origin: *");

    include_once 'config/dataBase.php';

    if (isset($_POST['regData'])) {
        $regData = json_decode( $_POST['regData'], true );

        $userName = $regData['user'];
        $userPassword = $regData['password'];
        $firstName = $regData['name'];
        $lastName = $regData['lastName'];
        $email = $regData['email'];

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

            mysqli_query($link,"INSERT INTO users (login, password) VALUES ('$userName', '$hashPassword')");
            mysqli_query($link,"INSERT INTO user_information (user_name, email, first_name, last_name) VALUES ('$userName', '$email', '$firstName', '$lastName')");

            echo json_encode($result, $true);

            exit();
        }
        else {
            echo json_encode($result, $err);

            exit();
        }
    }
?>