<?php
header('Content-Type: application/json; charset=utf-8');

// Allow requests only via POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Metoda není povolena.']);
    exit;
}

// Honeypot spam check
if (!empty($_POST['_honey'])) {
    // Silently succeed to spam bots
    echo json_encode(['success' => true]);
    exit;
}

// Get and sanitize inputs
$jmeno = isset($_POST['jmeno']) ? trim(strip_tags($_POST['jmeno'])) : '';
$email = isset($_POST['email']) ? trim(filter_var($_POST['email'], FILTER_SANITIZE_EMAIL)) : '';
$telefon = isset($_POST['telefon']) ? trim(strip_tags($_POST['telefon'])) : '';
$zprava = isset($_POST['zprava']) ? trim(strip_tags($_POST['zprava'])) : '';

// Validation of required fields
if (empty($jmeno) || empty($email) || empty($zprava)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Vyplňte prosím všechna povinná pole.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Zadejte prosím platnou e-mailovou adresu.']);
    exit;
}

// Recipient email
$to = 'pavel.dutka05@gmail.com';

// UTF-8 encoded subject
$subject = '=?UTF-8?B?' . base64_encode('Nová poptávka z webu Kamenictví Obelisk') . '?=';

// HTML Email Body
$message = '
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; color: #222; line-height: 1.6; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; }
        h2 { color: #bfa15f; border-bottom: 2px solid #bfa15f; padding-bottom: 10px; margin-top: 0; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
        th, td { padding: 10px; text-align: left; border-bottom: 1px solid #eee; }
        th { width: 150px; font-weight: bold; background-color: #f9f9f9; }
        .message-box { background-color: #f5f5f5; padding: 15px; border-radius: 4px; border-left: 4px solid #bfa15f; white-space: pre-wrap; }
    </style>
</head>
<body>
    <div class="container">
        <h2>Nová poptávka z webu</h2>
        <table>
            <tr>
                <th>Jméno zákazníka:</th>
                <td>' . htmlspecialchars($jmeno) . '</td>
            </tr>
            <tr>
                <th>E-mail:</th>
                <td><a href="mailto:' . htmlspecialchars($email) . '">' . htmlspecialchars($email) . '</a></td>
            </tr>
            <tr>
                <th>Telefon:</th>
                <td>' . htmlspecialchars($telefon ? $telefon : 'Neuveden') . '</td>
            </tr>
        </table>
        <h3>Zpráva / Dotaz:</h3>
        <div class="message-box">' . nl2br(htmlspecialchars($zprava)) . '</div>
    </div>
</body>
</html>
';

// Headers configuration to prevent spam folder classification
$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=utf-8';
$headers[] = 'From: Kamenictví Obelisk <info@obeliskhb.cz>';
$headers[] = 'Reply-To: ' . $jmeno . ' <' . $email . '>';
$headers[] = 'X-Mailer: PHP/' . phpversion();

$mailSent = mail($to, $subject, $message, implode("\r\n", $headers));

if ($mailSent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Omlouváme se, e-mail se nepodařilo odeslat. Zkuste to prosím později.']);
}
