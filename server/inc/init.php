<?php
/** etablir la connexion  la bdd**/
$_DB_HOST = "10.2.1.184";
$_DB_DATABASE = "test";
$_DB_USER = "root";
$_DB_PASS = "";

/*try {
    $dbConnexion = new PDO('mysql:host=' . $_DB_HOST . ';dbname=' . $_DB_DATABASE, $_DB_USER, $_DB_PASS,
        array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_PERSISTENT => false));
}
catch (PDOException $ex) {
    debug($ex->getMessage());
}*/

// Create connection
$dbConnexion = new mysqli($_DB_HOST, $_DB_USER, $_DB_PASS);

// Check connection
if ($dbConnexion->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";