<?php
    $host = "localhost";
    $database = "hotel"; 
    $user = "mysql"; 
    $password = "mysql"; 
    $link = mysqli_connect($host, $user, $password, $database) or die("Ошибка " . mysqli_error($link));

    $query="SELECT * FROM apartments";
    $result = mysqli_query($link, $query) or die("Ошибка выполнения запроса" . mysqli_error($link));

    $res = [];

    if($result)
    {
        $rows = mysqli_num_rows($result); // количество полученных строк
     
    for ($i = 0 ; $i < $rows ; ++$i)
    {
        $row = mysqli_fetch_row($result);
        $room = [];

        for ($j = 0 ; $j < 11 ; ++$j) {
            array_push($room, $row[$j]);
        }

        array_push($res, $room);
    }
     
    mysqli_free_result($result);
    }

    mysqli_close($link);

    header("Access-Control-Allow-Origin: *");
    echo json_encode(array("result"=>$res));
?>