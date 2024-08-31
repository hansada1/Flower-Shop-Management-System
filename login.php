<?php
session_start();

$servername = "localhost"; // Database server
$username = "root"; // Database username
$password = ""; // Database password
$dbname = "blooms_db"; // Database name

// Create a connection to the database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve and sanitize input data
$username = $conn->real_escape_string($_POST['username']);
$password = $_POST['password'];

// Query the database for the user
$sql = "SELECT * FROM users WHERE username='$username'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // User found, now verify the password
    $row = $result->fetch_assoc();
    if (password_verify($password, $row['password'])) {
        // Password is correct, start a session
        $_SESSION['username'] = $username;
        echo "Login successful! Welcome, " . $_SESSION['username'];
        // Redirect to the main page or dashboard
        header("Location: index.html");
    } else {
        echo "Invalid username or password. <a href='login.html'>Try again</a>";
    }
} else {
    echo "No user found with that username. <a href='reg.html'>Register here</a>";
}

// Close the connection
$conn->close();
?>
