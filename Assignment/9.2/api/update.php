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

// Handle PUT request for updating data
if ($_SERVER["REQUEST_METHOD"] == "PUT") {
    // Assuming the request body contains JSON data
    $data = json_decode(file_get_contents("php://input"), true);

    // Extract data fields (assuming 'field1' and 'field2' are placeholders)
    $field1 = $data['field1'];
    $field2 = $data['field2'];
    $id = $data['id']; // Assuming the ID of the record to be updated is provided

    // SQL statement for updating data
    $sql = "UPDATE your_table_name SET field1='$field1', field2='$field2' WHERE id='$id'";

    if ($conn->query($sql) === TRUE) {
        // Return success message
        echo json_encode(array("message" => "Data updated successfully"));
    } else {
        // Return error message
        echo json_encode(array("error" => "Error updating data: " . $conn->error));
    }
}

// Close connection
$conn->close();

?>
