<?php

define('HOST', 'localhost');
define('DATABASE', 'Dashboard');
define('USER', 'root');
define('PASSWORD', '');

try {
    $pdo = new PDO('mysql:host='.HOST.';dbname='.DATABASE, USER, PASSWORD);
    // Set PDO attributes (optional)
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    // Additional configuration if needed
} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
    // Handle connection error
}

?>
