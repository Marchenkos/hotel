<?php
function fallOut() {
    $fp = fopen("counter.txt", "a");
    $mytext = "Регистарция завершена с ошибкой ".date(DATE_RFC822)."\r\n";
    $test = fwrite($fp, $mytext);

    fclose($fp);
}

function success() {
    $fp = fopen("counter.txt", "a");
    $mytext = "Регистарция завершена успешно ".date(DATE_RFC822)."\r\n";
    $test = fwrite($fp, $mytext);

    fclose($fp);
}

function onSession() {
    $fp = fopen("counter.txt", "a");
    $mytext = "Данные занесены в сессию".date(DATE_RFC822)."\r\n";
    $test = fwrite($fp, $mytext);

    fclose($fp);
}
?>