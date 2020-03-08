<?php
    if(session_status()!=PHP_SESSION_ACTIVE) session_start();
    include 'modules/header.php';
    include 'modules/main.php';
    include 'modules/footer.php';
?>