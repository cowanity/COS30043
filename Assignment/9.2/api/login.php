<?php
include 'config.php';

// Start session
session_start();

// Check if user is already logged in
if (isset($_SESSION['username'])) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'User already logged in']);
    exit;
}

// Handle login request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve username and password from request
    $data = json_decode(file_get_contents('php://input'), true);
    $username = $data['username'];
    $password = $data['password']; // You should hash the password before storing it and compare hashed passwords during login

    // Check username and password (dummy example)
    if ($username === 'admin' && $password === 'password') {
        // Set session variable
        $_SESSION['username'] = $username;
        http_response_code(200);
        echo json_encode(['success' => true, 'message' => 'Login successful']);
        exit;
    } else {
        http_response_code(401);
        echo json_encode(['success' => false, 'error' => 'Invalid username or password']);
        exit;
    }
}
?>
