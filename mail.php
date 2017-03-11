<?php
	$sendto = "vinil.pro2016@yandex.ru";
	$subject = "Заявка с сайта Винил";

	$name = $_POST['name'];
	$phone = $_POST['phone'];

	$headers  = "From: Винил\r\n";
	$headers .= "Reply-To: Винил\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html;charset=utf-8 \r\n";

	$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
	$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>$subject</h2>\r\n";

    $msg .= "<p><strong>Имя: </strong> ".$name."</p>\r\n";
    $msg .= "<p><strong>Телефон: </strong> ".$phone."</p>\r\n";
	$msg .= "</body></html>";

    mail($sendto, $subject, $msg, $headers);
?>
