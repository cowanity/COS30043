<?php

// Establish database connection
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "database_name";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle DELETE request for deleting data
if ($_SERVER["REQUEST_METHOD"] == "DELETE") {
    // Assuming the ID of the record to be deleted is provided
    $id = $_GET['id'];

    // SQL statement for deleting data
    $sql = "DELETE FROM your_table_name WHERE id='$id'";

    if ($conn->query($sql) === TRUE) {
        // Return success message
        echo json_encode(array("message" => "Data deleted successfully"));
    } else {
        // Return error message
        echo json_encode(array("error" => "Error deleting data: " . $conn->error));
    }
}

// Close connection
$conn->close();

?>
