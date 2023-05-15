<?php 
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$message = $_POST['user_message'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'kol.tsentr.96@bk.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'Xu3rJKTkb3eczXvndc7V'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('kol.tsentr.96@bk.ru'); // от кого будет уходить письмо?
$mail->addAddress('gorka__1@bk.ru');     // Кому будет уходить письмо 

$mail->isHTML(true);                                  // формат HTML сообщения

$mail->Subject = 'Отзыв с сайта Svai-store ';
$mail->Body    = '' .$name . ' оставил отзыв, его телефон ' .$phone. 
'<br>Почта этого пользователя: ' .$email. ' <br>Сообщение '.$message;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: index.html');
}
?>