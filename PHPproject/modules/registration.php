<?php
    if(session_status()!=PHP_SESSION_ACTIVE) session_start();
    include '../functions/writeOnDoc.php';
    function cap() {
        return rand(0, 15);
    }

    $first_operand = cap();
    $second_operand = cap();
    $capcha = $_POST['capcha_result'];

    if (isset($_POST['login'])) {
        $login = $_POST['login'];
        if ($login =='') { unset($login);}
    }

    if (isset($_POST['password'])) {
        $passwordReg = $_POST['password'];
        if ($passwordReg =='') { unset($passwordReg);}
    }

    if (isset($_POST['email'])) {
        $email = $_POST['email'];
        if ($email =='') { unset($email);}
    }

    if (isset($_POST['phone'])) {
        $phone = $_POST['phone'];
        if ($phone =='') { unset($phone);}
    }

    if (isset($_POST['name'])) {
        $name = $_POST['name'];
        if ($name =='') { unset($name);}
    }

    if((int)$capcha == (int)$_POST['first_operand'] + (int)$_POST['second_operand'] && strlen($capcha) > 0) {
        if (strlen($passwordReg) && preg_match("/([a-zа-я0-9_]{1,}-)+((([a-zа-я0-9_]{1,})-){2})+([a-zа-я0-9_]{1,})/",$passwordReg)) {
            $errorPassword = "";
        } else {
            $errorPassword = "No correct!";
        }

        if (preg_match("/^[a-zа-я0-9_]{4,}$/i",$login) && !preg_match("/(.)\\1\\1\\1/",$login)) {
            $errorLogin = "";
        } else {
            $errorLogin = "No correct!";
        }

        $count = preg_match('/\s*(dyrak|blin|emae)\s*/', $email);
        if (preg_match('/^(\S+)@([a-z0-9.]+)/is', $email) && $count == 0) {
            $errorEmail = "";
        } else {
            $errorEmail = "No correct!";
        }

        if (preg_match("/\((\d{3})\)\s(\d{3}-\d{2}-\d{2})/",$phone)) {
            $errorPhone = "";
        } else {
            $errorPhone = "No correct!";
        }

        if($errorPhone == "" && $errorEmail == "" && $errorLogin == "" && $errorPassword == "") {
            include '../db/db.php';
            $query="SELECT id FROM users WHERE login='$login'";
            $result = mysqli_query($link, $query) or die("Ошибка выполнения запроса" . mysqli_error($link));

            if ($result) {
                $row = mysqli_fetch_row($result);

                if (empty($row[0])) {
                    $salt = mt_rand(100, 999);
                    $gender = "m";
                    $passwordReg = md5(md5($passwordReg).$salt);
                    $query="INSERT INTO users (login, name, password, salt, mail, phone, gender) VALUES
                    ('$login','$name', '$passwordReg','$salt','$email','$phone','$gender')";
                    $result_insert=mysqli_query($link, $query) or die("Ошибка " .
                    mysqli_error($link));
            
                    if ($result_insert) {
                        success();
            
                        $query="SELECT * FROM users WHERE login='$login'";
                        $rez = mysqli_query($link, $query);
                        if ($rez) {
                            $row = mysqli_fetch_assoc($rez);
                            $_SESSION['id'] = $row['id'];
                            $_SESSION['login'] = $row['login'];
                            $_SESSION['name']=$row['name'];
                            mysqli_close($link);
                            onSession();
                        }

                        header ('Location: auth.php');
                        exit();
                    }
                } else {
                    $errorLogin.="Данный логин занят";
                }
            }
        } else {
            fallOut();
        }
    }

    echo " <div class='back-home'>
            <a href=\"../index.php\" target=\"content\">Home</a>
        </div>";
?>

<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <link rel='stylesheet' href='../css/header.css' />
        <link rel='stylesheet' href='../css/fonts.css' />
        <link rel='stylesheet' href='../css/footer.css' />
        <link rel='stylesheet' href='../css/capcha.css' />
        <link rel='stylesheet' href='../css/main.css' />
    </head>
    <body>
        <div class='logo'>
            <img class='logo__item' src='../img/logo.png'>
            <span class='title'>Registration</span>
        </div>
        <main class='main-container'>
            <form class='main-container__form' action='registration.php' method='post'>
                <p>
                    <input type='text' name='name' value="<?=@$name;?>" placeholder='Your name'>
                </p>
                <p>
                    <input type='text' name='login' value="<?=@$login;?>" placeholder='Login'>
                    <span class="error"><?=@$errorLogin;?></span>
                </p>
                <p>
                    <input type='text' name='password' placeholder='Password'>
                    <span class="error"><?=@$errorPassword;?></span>
                </p>
                <p>
                    <input type='tel' name='phone' value="<?=@$phone;?>" placeholder='Phone'>
                    <span class="error"><?=@$errorPhone;?></span>
                </p>
                <p>
                    <input type='text' name='email' value="<?=@$email;?>" placeholder='Email'>
                    <span class="error"><?=@$errorEmail;?></span>
                </p>
                <div class='checkbox-block'>
                    <p><input type='radio' name='gender' value='woman'/>Woman</p>
                    <p><input type='radio' name='gender' value='man'/>Man</p>
                </div>
                <div class='capcha-block'>
                    <div class='capcha'>
                        <input type='text' class='capcha__operand' name='first_operand' readonly value="<?=@$first_operand;?>"/>
                        <span class='capcha__operator'>+</span>
                        <input type='text'class='capcha__operand' name='second_operand' readonly value="<?=@$second_operand;?>">
                    </div>
                    <input type='text' class='capcha__result' name='capcha_result' placeholder='Enter result'>
                </div>
                <input type='submit' class='submit-button'/>
                </form>

        </main>
    </body>
</html>

<?php
    include 'footer.php';
?>