<?php
echo "Connecting to a database <br>";
//ways to connect to a MySQL Database
//1.MySQLi extension
//2.PDO


$servername="localhost";
$username="root";
$password="";
$database="mydb";

//Create a connection
$conn = mysqli_connect($servername,$username,$password,$database);

//Die if connection was not successful
if(!$conn){
    die("sorry we failed to connect:".mysqli_connect_error());
}
else{
    echo "Connection was successful ";
}

// Create a table in the db (Here Table Name is phptrip )
$sql = "CREATE TABLE `phptrip` ( `sno` INT(6) NOT NULL AUTO_INCREMENT , `name` VARCHAR(12) NOT NULL , `dest` VARCHAR(6) NOT NULL , PRIMARY KEY (`sno`))";
$result = mysqli_query($conn, $sql);

// Check for the table creation success
if($result){
    echo "The table was created successfully!<br>";
}
else{
    echo "The table was not created successfully because of this error ---> ". mysqli_error($conn);
}

?>