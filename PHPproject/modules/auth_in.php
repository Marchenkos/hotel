<?php
   if(session_status()!=PHP_SESSION_ACTIVE) session_start();
   if (isset($_POST['login'])) { 
      $login = $_POST['login']; 
      if ($login == '') { unset($login);}
   }
   if (isset($_POST['passwordAuth'])) {
      $passwordAuth=$_POST['passwordAuth'];
      if ($passwordAuth =='') { unset($passwordAuth);}
   }
   if (empty($login) or empty($passwordAuth)) {
      print "<script language='Javascript' type='text/javascript'>
      alert ('Вы заполнили не все поля!');
      function reload(){location = '../../index.php'};
      setTimeout('reload()', 0);
      </script>";
      exit();
   }
   $login = stripslashes($login);
   $login = htmlspecialchars($login);
   $passwordAuth = stripslashes($passwordAuth);
   $passwordAuth = htmlspecialchars($passwordAuth);
   $login = trim($login);
   $passwordAuth = trim($passwordAuth);
   $_SESSION['temp_login']=$login;
   include '../db/db.php';
   $query ="SELECT * FROM users WHERE login='$login'";
   $result = mysqli_query($link, $query) or die("Ошибка " .mysqli_error($link));
   $row = mysqli_fetch_assoc($result);
   if (empty($row['id'])) {
         mysqli_close($link);
         print "<script language='Javascript' type='text/javascript'>
         alert ('Такого логина не существует!');
         function reload(){location = 'auth.php'};
         setTimeout('reload()', 0)
         </script>";
   }
 else {
    $doublePassword = $_POST['passwordAuthDouble']; 
 if ($row['password']==md5(md5($passwordAuth).$row['salt']) && $passwordAuth==$doublePassword)
 {
 $_SESSION['login']=$row['login'];
 $_SESSION['name']=$row['name'];
 $_SESSION['id']=$row['id'];
 print "<script language='Javascript'
type='text/javascript'>
 function reload(){top.location = '../index.php'};
 setTimeout('reload()', 0)
 </script>";
 }
 else {
    print "<script language='Javascript'
        type='text/javascript'>
        alert ('Вы ввели не правильный пароль!');
        function reload(){location = 'auth.php'};
        setTimeout('reload()', 0)
    </script>";
 }
 mysqli_close($link);
 }
?>