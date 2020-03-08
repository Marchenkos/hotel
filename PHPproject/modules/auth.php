<?php
 if(session_status()!=PHP_SESSION_ACTIVE) session_start();

 echo " <div class='back-home'>
 <a href=\"../index.php\" target=\"content\">Home</a>
</div>";
?>
<html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8">
    </head>
    <body>
    <link rel='stylesheet' href='../css/header.css' />
        <link rel='stylesheet' href='../css/fonts.css' />
        <link rel='stylesheet' href='../css/footer.css' />
        <link rel='stylesheet' href='../css/main.css' />
    <div class='logo'>
            <img class='logo__item' src='../img/logo.png'>
            <span class='title'>Sing In</span>
        </div>
        <main class='main-container'>
            <form class='main-container__form' action="/modules/auth_in.php" method="post">
                <input name="login" value="<?=@$_SESSION['temp_login'];?>" type="text" placeholder='Your name'>
                <input name="passwordAuth" type="password" placeholder='Your password'>
                <input name="passwordAuthDouble" type="password" placeholder='Confirm password'>
                <input type="submit" class='submit-button' name="submit" value="Sing in">
            </form>
    </body>
</html>

<?php
    include 'footer.php';
?>