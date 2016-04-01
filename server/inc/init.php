<?php
/** etablir la connexion  la bdd**/
try {
    $dbConnexion = new PDO('mysql:host=' . $_DB_HOST . ';dbname=' . $_DB_DATABASE, $_DB_USER, $_DB_PASS,
        array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_PERSISTENT => false));
}
catch (PDOException $ex) {
    debug($ex->getMessage());
}