<?php
// Password protect this page
$password = "admin123"; // CHANGE THIS TO SOMETHING SECURE!
$submitted = $_POST['password'] ?? '';

if ($submitted !== $password) {
    echo '
    <!DOCTYPE html>
    <html>
    <head>
        <title>Login - Quote Submissions</title>
        <style>
            body { font-family: Arial, sans-serif; padding: 50px; max-width: 400px; margin: 0 auto; background: #f5f7ff; }
            .login-box { background: white; padding: 30px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
            h2 { color: #4361ee; text-align: center; }
            input { width: 100%; padding: 12px; margin: 10px 0; border: 2px solid #e0e0e0; border-radius: 5px; font-size: 16px; }
            button { width: 100%; padding: 12px; background: linear-gradient(135deg, #4361ee, #3a0ca3); color: white; border: none; border-radius: 5px; font-size: 16px; cursor: pointer; }
            button:hover { opacity: 0.9; }
        </style>
    </head>
    <body>
        <div class="login-box">
            <h2>🔐 View Quote Submissions</h2>
            <p>Enter password to view all quote requests:</p>
            <form method="POST">
                <input type="password" name="password" placeholder="Enter password" required>
                <button type="submit">View Submissions</button>
            </form>
        </div>
    </body>
    </html>';
    exit;
}

// ====== SHOW SUBMISSIONS ======
echo '<!DOCTYPE html>
<html>
<head>
    <title>Quote Submissions</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; background: #f5f7ff; }
        .container { max-width: 1000px; margin: 0 auto; }
        h1 { color: #4361ee; text-align: center; }
        .stats { background: white; padding: 20px; border-radius: 10px; margin: 20px 0; box-shadow: 0 3px 10px rgba(0,0,0,0.1); }
        .submission { background: white; border-radius: 10px; margin: 25px 0; padding: 25px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); border-left: 5px solid #4361ee; }
        .field { margin: 12px 0; }
        .label { font-weight: bold; color: #4361ee; min-width: 150px; display: inline-block; }
        .logout { text-align: right; margin-bottom: 20px; }
        .logout-btn { background: #ff4757; color: white; padding: 8px 15px; border: none; border-radius: 5px; cursor: pointer; }
        .empty { text-align: center; padding: 50px; color: #666; }
        .email-link { color: #4361ee; text-decoration: none; }
        .email-link:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <div class="container">
        <div class="logout">
            <button class="logout-btn" onclick="window.location.href=\'view-submissions.php\'">Logout</button>
        </div>
        
        <h1>📋 Quote Form Submissions</h1>';

$submissionsFile = 'submissions.txt';
if (file_exists($submissionsFile)) {
    $lines = file($submissionsFile, FILE_IGNORE_NEW_LINES);
    $submissions = array_reverse($lines); // Newest first
    
    if (empty($submissions)) {
        echo '<div class="empty">
                <h3>No submissions yet</h3>
                <p>Quote form submissions will appear here once clients start submitting.</p>
              </div>';
    } else {
        echo '<div class="stats">
                <h3>📊 Statistics</h3>
                <p>Total Submissions: <strong>' . count($submissions) . '</strong></p>
                <p>Latest Submission: <strong>' . json_decode($submissions[0], true)['timestamp'] . '</strong></p>
              </div>';
        
        foreach ($submissions as $index => $line) {
            $data = json_decode($line, true);
            if ($data) {
                $submissionNumber = count($submissions) - $index;
                
                echo '<div class="submission">';
                echo '<h3>📄 Submission #' . $submissionNumber . ' - ' . $data['timestamp'] . '</h3>';
                echo '<div class="field"><span class="label">Service:</span> ' . $data['service'] . '</div>';
                echo '<div class="field"><span class="label">Client:</span> ' . $data['client'] . '</div>';
                echo '<div class="field"><span class="label">Email:</span> <a class="email-link" href="mailto:' . $data['email'] . '">' . $data['email'] . '</a></div>';
                echo '<div class="field"><span class="label">Phone:</span> ' . ($data['phone'] ?: 'Not provided') . '</div>';
                echo '<div class="field"><span class="label">Company:</span> ' . ($data['company'] ?: 'Not provided') . '</div>';
                echo '<div class="field"><span class="label">Budget:</span> ' . ($data['budget'] ?: 'Not specified') . '</div>';
                echo '<div class="field"><span class="label">Timeline:</span> ' . ($data['timeline'] ?: 'Not specified') . '</div>';
                echo '<div class="field"><span class="label">Project Details:</span><br><div style="margin-top: 5px; padding: 10px; background: #f8f9ff; border-radius: 5px;">' . nl2br($data['details']) . '</div></div>';
                if (!empty($data['additional'])) {
                    echo '<div class="field"><span class="label">Additional Info:</span><br><div style="margin-top: 5px; padding: 10px; background: #f8f9ff; border-radius: 5px;">' . nl2br($data['additional']) . '</div></div>';
                }
                echo '</div>';
            }
        }
    }
} else {
    echo '<div class="empty">
            <h3>No submissions file found</h3>
            <p>The submissions file will be created automatically when first quote is submitted.</p>
          </div>';
}

echo '</div></body></html>';
?>