<?php
echo "Connecting to a database <br>";
//ways to connect to a MySQL Database
//1.MySQLi extension
//2.PDO


$servername="localhost";
$username="root";
$password="";

//Create a connection
$conn = mysqli_connect($servername,$username,$password);

//Die if connection was not successful
if(!$conn){
    die("sorry we failed to connect:".mysqli_connect_error());
}
else{
    echo "Connection was successful ";
}

//Create a db
$sql="CREATE DATABASE dbHarry3";
$result=mysqli_query($conn,$sql);

//Check for database creation success
if($result){
    echo"The db was created successfully <br>";
}
else{
    echo"The db was not created successfully because of this erorr ",mysqli_error($conn);
}
echo "the result is ";
echo var_dump($result); // false when query false
echo "<br>";
?>
