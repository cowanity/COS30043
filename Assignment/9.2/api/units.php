<?php
include 'config.php';

// Start session
session_start();

// Check if user is logged in
if (!isset($_SESSION['username'])) {
    http_response_code(401);
    echo json_encode(['success' => false, 'error' => 'Login required']);
    exit;
}

$conn = mysqli_connect(HOST, USER, PASSWORD, DATABASE);
mysqli_set_charset($conn, 'utf8');

// Set content type for JSON
header('Content-Type: application/json; charset=utf-8');

// Handle CRUD operations based on request method
$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        // Implement logic to retrieve units data
        break;
    case 'POST':
        // Implement logic to insert a new unit
        break;
    case 'PUT':
        // Implement logic to update a unit
        break;
    case 'DELETE':
        // Implement logic to delete a unit
        break;
    default:
        http_response_code(405);
        echo json_encode(['success' => false, 'error' => 'Method Not Allowed']);
}
?>
