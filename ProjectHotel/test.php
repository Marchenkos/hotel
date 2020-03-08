<?php
    $host = "localhost";
    $database = "hotel"; 
    $user = "mysql"; 
    $password = "mysql"; 
    $link = mysqli_connect($host, $user, $password, $database) or die("Ошибка " . mysqli_error($link));

    if (isset($_POST['roomId'])) {
        $id = $_POST['roomId'];

        $query="SELECT * FROM apartments WHERE id='$id'";
        $result = mysqli_query($link, $query) or die("Ошибка выполнения запроса" . mysqli_error($link));

        $row = mysqli_fetch_row($result);
        mysqli_close($link);

        header("Access-Control-Allow-Origin: *");
        echo json_encode(array("blabla"=>$row));
    }

    // if(isset($_POST['action']) && ! empty($_POST['action'])) {
    //     header("Access-Control-Allow-Origin: *");

    //     echo json_encode(array("blabla"=>$variable));
    // }
?>