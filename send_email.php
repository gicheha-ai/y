<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $service_name = htmlspecialchars($_POST['service_name']);
    $client_name = htmlspecialchars($_POST['client_name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $company = htmlspecialchars($_POST['company']);
    $budget = htmlspecialchars($_POST['budget']);
    $timeline = htmlspecialchars($_POST['timeline']);
    $project_details = htmlspecialchars($_POST['project_details']);
    $additional_info = htmlspecialchars($_POST['additional_info']);
    
    // Email settings
    $to = "gichehalawrence@gmail.com";
    $subject = "New Quote Request: $service_name";
    
    // Email content
    $message = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #4361ee, #3a0ca3); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 15px; }
            .field-label { font-weight: bold; color: #4361ee; }
            .field-value { margin-top: 5px; padding: 10px; background: white; border-radius: 5px; border-left: 4px solid #4361ee; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h1>New Quote Request</h1>
                <p>Service: $service_name</p>
            </div>
            <div class='content'>
                <div class='field'>
                    <div class='field-label'>Client Information:</div>
                    <div class='field-value'>
                        <strong>Name:</strong> $client_name<br>
                        <strong>Email:</strong> $email<br>
                        <strong>Phone:</strong> $phone<br>
                        <strong>Company:</strong> $company
                    </div>
                </div>
                
                <div class='field'>
                    <div class='field-label'>Project Details:</div>
                    <div class='field-value'>
                        <strong>Service Required:</strong> $service_name<br>
                        <strong>Budget Range:</strong> $budget<br>
                        <strong>Timeline:</strong> $timeline
                    </div>
                </div>
                
                <div class='field'>
                    <div class='field-label'>Project Description:</div>
                    <div class='field-value'>$project_details</div>
                </div>
                
                <div class='field'>
                    <div class='field-label'>Additional Information:</div>
                    <div class='field-value'>" . ($additional_info ? $additional_info : 'No additional information provided') . "</div>
                </div>
                
                <div style='margin-top: 30px; padding: 20px; background: #e8f4ff; border-radius: 5px; text-align: center;'>
                    <p><strong>This quote request was submitted from your freelance portfolio website.</strong></p>
                    <p>Please respond within 24 hours.</p>
                </div>
            </div>
        </div>
    </body>
    </html>
    ";
    
    // Email headers
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: Portfolio Website <noreply@lawrence-portfolio.com>" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    // Send email
    if (mail($to, $subject, $message, $headers)) {
        // Success - redirect to thank you page
        echo '<script>
            alert("Thank you! Your quote request has been sent successfully. I will contact you within 24 hours.");
            window.location.href = "../index.html";
        </script>';
    } else {
        // Error
        echo '<script>
            alert("Sorry, there was an error sending your message. Please try again or email me directly at gichehalawrence@gmail.com");
            window.history.back();
        </script>';
    }
} else {
    // Not a POST request
    header("Location: ../index.html");
    exit();
}
?>