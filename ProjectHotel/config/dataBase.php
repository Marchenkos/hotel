<?php
class Database{
    private $host = "localhost";
    private $database = "hotel";
    private $user = "mysql";
    private $password = "mysql";
    public $connection;

    public function getConnection(){

        $this->$connection = mysqli_connect($this->host, $this->$user, $this->$password, $this->$database) or die("Ошибка " . mysqli_error($connection));

        return $this->$connection;
    }
}
?>
