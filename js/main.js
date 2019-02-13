jQuery(document).ready(function() {


// Start

//Задаём вручную упражнение
//var data = html_6;

$(".history").html(""); //Clear history

$( ".userAnswer" ).focus();//Установка фокуса для ввода ответа

var count = 1;
var count_max = 0; //

//Считаем кол-во вопросов
for ( key in data ) {
  if (data.hasOwnProperty(key)) {
    count_max++;
  } //if the data has the key property
} // for...go through each item



//Вывод первого вопроса
if( count = 1 ) {
  task = data[count];
  //Вывод вопроса
  $(".question").html(task.question);
}


//Очистка подсказки и поля для ввода
function clearMessage() {
  $('.message').hide();
  $('.userAnswer').val('');
}

//Следующий вопрос
function nextQuestion() {
  if(count == count_max) {
    alert("Все задания выполнены!");
    count = 1;
    task = data[count];
    $(".question").text(task.question);
  } else {
    count++;
    task = data[count];
    $(".question").text(task.question);
  }//проверка окончания
}

$("#answer_form").submit(function() {

   var userAnswer = $(".userAnswer").val();

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



});//ready