<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'PHPMailer/src/Exception.php';
  require 'PHPMailer/src/PHPMailer.php';

  $mail = new PHPMailer(true);
  $mail->CharSet = 'UTF-8';
  $mail->setLanguage('ru', 'PHPMailer/language');
  $mail->IsHTML(true);

  $mail->setForm('vitya.staselovich.94@mail.ru', 'Пловец до мозга-костей')ж
  $mail->addAddress('staselovich.vitya@gmail.com');
  $mail->Subject = 'Привет, вот мое письмо';

  $body = '<h1>Данные заказчика</h1>';

  if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
  }
  if(trim(!empty($_POST['phone']))){
    $body.='<p><strong>Имя:</strong> '.$_POST['phone'].'</p>';
  }

  $mail->Body = $body;

  if (!$mail->send()) {
    $message = 'Ошибка';
  } else {
    $message = 'Данные отправлены!';
  }

  $response = ['message' => $message];


  header('Content-type: application/json');
  echo json_encode($response);
?>
