<?php
// insert.php

// Parse JSON input
$data = json_decode(file_get_contents("php://input"), true);

// Mock database (replace this with your actual database logic)
$database = [];

// Insert data into the database
$database[] = $data;

// Send response
header('Content-Type: application/json');
echo json_encode(['message' => 'Data inserted successfully', 'data' => $data]);
?>
