<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['Name'];
    $email = $_POST['Email'];
    $phone = $_POST['Phone Number'];
    $message = $_POST['Massage'];  // Note: Fix typo to "Message"

    $to = "fantasticpartiesyyc@gmail.com";  // Replace with your Gmail address
    $subject = "New Contact Form Submission";
    $headers = "From: $email" . "\r\n" . "Reply-To: $email";

    $body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage: $message";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
}
?>
