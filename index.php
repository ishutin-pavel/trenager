<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>IT Тренер</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <nav class="menu">
    <a class="menu__item" href="?url=html_1">Базовые Cтруктурные Разметка</a>
    <a class="menu__item" href="?url=html_2">Таблица</a>
    <a class="menu__item" href="?url=html_3">Семантические</a>
    <a class="menu__item" href="?url=html_4">Форма</a>
    <a class="menu__item" href="?url=html_5">Списки</a>
    <a class="menu__item" href="?url=html_6">Элементы</a>
    <a class="menu__item" href="?url=html_7">Оформление</a>
    <a class="menu__item" href="?url=html_8">Универсальные атрибуты</a>
  </nav>

<div class="container">
  <div class="floating-background">
    <div class="question"></div>

    <form action="" id="answer_form">
      <input type="text" class="userAnswer" value="">
    </form>

    <div class="message"></div>
    <p>Введите ответ и нажмите <kbd>&lt;Ctrl&gt;+&lt;Enter&gt;</kbd></p>

    <div class="history"></div>
  </div>

</div><!-- .container -->

<script src="js/jquery-3.3.1.min.js"></script>
<script src="js/html-tasks.js"></script>
<script>
<?php
if(isset($_GET["url"])) {

  $url = $_GET["url"];

  switch ($url) {
      case 'html_1':
          echo "var data = html_1;";
          break;
      case 'html_2':
          echo "var data = html_2;";
          break;
      case 'html_3':
          echo "var data = html_3;";
          break;
      case 'html_4':
          echo "var data = html_4;";
          break;
      case 'html_5':
          echo "var data = html_5;";
          break;
      case 'html_6':
          echo "var data = html_6;";
          break;
      case 'html_7':
          echo "var data = html_7;";
          break;
      case 'html_8':
          echo "var data = html_8;";
          break;
  }//switch

} else {
  echo "var data = html_1;";
}

?>
</script>
<script src="js/main.js"></script>


</body>
</html>