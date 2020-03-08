<?php
    if (isset($_POST['name']) && isset($_POST['password']) && isset($_POST['login']) && isset($_POST['capcha_result']) && isset($_POST['email']) && isset($_POST['phone'])) {
        
        $name = $_POST['name'];
        $login = $_POST['login'];
        $password = $_POST['password'];
        $phone = $_POST['phone'];
        $email = $_POST['email'];
        $gender = $_POST['gender'];
        $result = $_POST['capcha_result'];

        if(strlen($name) == 0 || strlen($password) == 0 || strlen($login) == 0 || strlen($phone) == 0 || strlen($email) == 0 || strlen($result) == 0) {
            print "<script language='Javascript' type='text/javascript'>
            alert ('Вы ввели не все поля!');
            document.location.href='registration.php';
            </script>";
        } else {
            if (strlen($password) >= 12) {
            } else {
                print "<script language='Javascript' type='text/javascript'>
                    alert ('Запись с таким номером не существует!');
                    document.location.href='registration.php';
                    </script>";
                $fp = fopen("counter.txt", "a");
                
                $mytext = "Регистарция завершена с ошибкой ".date(DATE_RFC822)."\r\n";
                $test = fwrite($fp, $mytext);
            
                fclose($fp);
                exit();
            }

            // if (preg_match("/^[a-zа-я0-9_]{4,}$/i",$login) && !preg_match("/(.)\\1\\1\\1/",$login)) {
            // } else {
            //     exit ("Вы ввели не всю информацию, вернитесь назад и заполните все поля!");
            // }

            $first_operand = $_POST['first_operand'];
            $second_operand = $_POST['second_operand'];

            if($result == $second_operand + $first_operand) {
            } else {
                echo "LOSER";
            }


            $count = preg_match('/\s*(dyrak|blin|emae)\s*/', $email);
            if (preg_match('/^(\S+)@([a-z0-9.]+)/is', $email) && $count == 0) {
            } else {
                echo "email incorrect";
            }

            if (preg_match("/\((\d{3})\)\s(\d{3}-\d{2}-\d{2})/",$phone)) {
            } else {
                echo "Phone incorrect";
            }
        }
    }

?>