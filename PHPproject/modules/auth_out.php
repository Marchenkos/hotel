<?php
// if(session_status()!=PHP_SESSION_ACTIVE) session_start();
// $_SESSION['login']='';
// $_SESSION['id']='';
// $_SESSION['surname']='';
// $_SESSION['first_name']='';
// $_SESSION['second_name']='';
// $_SESSION['status']='';
session_destroy();
 print "<script language='Javascript' type='text/javascript'>
 function reload(){top.location = '../../index.php'};
 setTimeout('reload()', 0);
 </script>";
?>