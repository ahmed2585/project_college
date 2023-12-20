<?php
-
$firstname = $_REQUEST['F_name'];
$lastname = $_REQUEST['L_name'];
$age = $_REQUEST['age'];
$gender = $_REQUEST['gender-choice'];
$email = $_REQUEST['email'];
$phone = $_REQUEST['phone'];
$visit = $_REQUEST['visit'];
$service = $_REQUEST['Service-name'];


if (isset($_POST['Book']))
{
    $host ="localhost";
    $user ="root";
    $password ="";
    $db ="bookappoinment";

    $conn = mysqli_connect($host,$user,$password,$db );


    $insert ="insert into users values('$firstname', '$lastname', '$age', '$gender', '$email', '$phone', '$visit' , '$service' )" ;

    mysqli_query($conn ,$insert);

    if($conn){
        echo("<h1>  our bookappoinment is done </h1>");
    }

    else{
        echo("<h1>  ERROR </h1>");
    }
}




?>