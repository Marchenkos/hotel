<?php
    $capcha = $_POST['capcha_result'];
    $first_operand = rand(0, 15);
    $second_operand = rand(0, 15);

    function checkCapcha() {
        if((int)$capcha == (int)$_POST['first_operand'] + (int)$_POST['second_operand'] && strlen($capcha) > 0) {
            return true;
        } else {
            return false;
        }
    }
?>