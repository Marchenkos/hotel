<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");

class User{
    private $connection;
    private $user_table = "users";
    private $user_inf_table = "user_information";

    public $login;
    public $password;

    public $first_name;
    public $last_name;
    public $email;
    public $phone;
    public $birthday;

    public function __construct($db){
        $this->connection = $db;
    }

    function create(){
        $query = "INSERT INTO " . $this->user_inf_table . "
            SET
                first_name = :first_name,
                last_name = :last_name,
                email = :email,
                phone = :phone,
                birthday = :birthday";

        $query2 = "INSERT INTO " . $this->user_table . "
            SET
                login = :password,
                password = :password";


        $stmt = $this->connection->prepare($query);
        $stmt2 = $this->connection->prepare($query2);

        $this->first_name=htmlspecialchars(strip_tags($this->first_name));
        $this->last_name=htmlspecialchars(strip_tags($this->last_name));
        $this->email=htmlspecialchars(strip_tags($this->email));
        $this->birthday=htmlspecialchars(strip_tags($this->birthday));
        $this->phone=htmlspecialchars(strip_tags($this->phone));

        $this->password=htmlspecialchars(strip_tags($this->password));
        $this->login=htmlspecialchars(strip_tags($this->login));

        $stmt->bindParam(':first_name', $this->first_name);
        $stmt->bindParam(':last_name', $this->last_name);
        $stmt->bindParam(':email', $this->email);
        $stmt->bindParam(':phone', $this->phone);
        $stmt->bindParam(':birthday', $this->birthday);

        $password_hash = password_hash($this->password, PASSWORD_BCRYPT);

        $stmt2->bindParam(':login', $this->login);
        $stmt2->bindParam(':password', $password_hash);

        if($stmt->execute() && $stmt2->execute()){
            return true;
        }

        return false;
    }
}