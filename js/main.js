$(document).ready(function() {

$(".floating-background").mouseenter(function(event) {
  /* Act on the event */
  console.log('mouseenter');
}).mouseleave(function (event) {
  console.log('mouseleave');
}).mouseout(function() {
  // body...
  console.log('mouseout');
});

//Установка фокуса для ввода ответа
$( ".userAnswer" ).focus();

//Первый урок по умолчанию
var url = $(".level_html .menu__item:first-child").attr('href');
//console.log(url);

var count = 1;//Счетчик номер задания
var count_max = 1;//Всего заданий
var allTasks = {};//Объект для заданий

/*
* Функция очистки подсказки и поля для ввода
*/
function clearMessage() {
  $('.message').hide();
  $('.userAnswer').val("");
}

/*
* Функция получения заданий
*/
function getAllTasks() {

  var data = $.ajax({
      type: 'POST',
      url: url,
      async: false,
      dataType: "json",
      data: '',
      success: function (data) {
          return data;
      },
      error: function (xhr, type, exception) {
          // Do your thing
      }
  });

  allTasks = data.responseJSON;

  return allTasks;

}

/*
* Функция обновления задания
*/
function updateTask() {

  task = allTasks[count];

  //Вывод первого вопроса
  $(".question").text(task.question);

}//updateTask

/*
* Функция Запуск урока
*/
function Start() {

  allTasks = {};//Очищаем объект

  allTasks = getAllTasks();//Получаем задания

  //Считаем кол-во вопросов
  count_max = 0;//cброс счетчика
  for ( key in allTasks ) {
    if (allTasks.hasOwnProperty(key)) {
      count_max++;
    } //if the allTasks has the key property
  } // for...go through each item

  $(".count_max").html(count_max); //Всего вопросов - вывод в html
  $(".count").html(count);//Текущий вопрос - вывод в html

  updateTask();

} // Start



/*
* Функция
* Уведомление об окончании
* Возврат к первому вопросу
*/
function nextQuestion() {

  if(count == count_max) {

    alert("Все задания выполнены!");

    count = 1;

    $(".count").html(count);//Текущий вопрос - вывод в html

    updateTask();

  } else {

    count++;

    updateTask();

    $(".count").html(count);

  }//проверка окончания

}//nextQuestion



/*
* Проверка ответа
*/
$("#answer_form").submit(function() {

  //console.log(allTasks); //Ошибка: Вот тут данные суммируются !!!! - уже всё нормально

   var userAnswer = $(".userAnswer").val();

   console.log( $( this ).serialize() );

   if ( userAnswer == task.rightAnswer ){

     setTimeout(clearMessage, 300);//Очистка подсказки и поля для ввода

     function history() {

       $(".history").prepend('<div class="history__item"><xmp class="history__answer">' + task.rightAnswer + '</xmp><div class="history__question">' + task.question + '</div></div>');

       $(".history .history__item:first-child").hide().slideDown('fast');//анимация

       $(".history .history__item:nth-child(3)").remove();//удаляем лишнии блоки

     }//add history

     setTimeout(history, 300);

     setTimeout(nextQuestion, 300);

  } else {

     $(".message").show().html("Правильный ответ: <xmp>" + task.rightAnswer + "</xmp>");

     setTimeout(clearMessage, 1000);//Очистка подсказки и поля для ввода

  }//check user answer
  return false;//отменяем отправку формы по умолчанию
});//submit



/*
* Меню
*/
$(".menu__child").hide();
$(".level_html").show();

$(".menu__parent .menu__item").on('click', function(e) {

  var theme = $(this).attr('href');

  $(this).parent('.menu__parent').find('.menu__item').removeClass('active');
  $(this).addClass('active');

  $(".menu__child").slideUp();

  $("." + theme).slideDown();

  return false;

});


$(".menu__child .menu__item").on('click', function(e) {

  e.preventDefault();//отменяем действие по умолчанию

  $(this).parent('.menu__child').find('.menu__item').removeClass('active');
  $(this).addClass('active');

  count = 1;//cброс счетчика

  url = $(this).attr('href');//получаем путь к json файлу

  $(".history").html(""); //Clear history

  clearMessage();//Очистка подсказки и поля для ввода

  Start();//стартуем новый урок

  $( ".userAnswer" ).focus();//устанавливаем фокус

}); // on click


Start();//стартуем первый урок

}); // ready
