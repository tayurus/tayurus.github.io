
var correctAnswerIndex = 0;

var hints = [
  "Подсказка 1 Подсказка 1 Подсказка 1 Подсказка 1 Подсказка 1 Подсказка 1 Подсказка 1 Подсказка 1 Подсказка 1 Подсказка 1 Подсказка 1",
  "Подсказка 2 Подсказка 2 Подсказка 2 Подсказка 2 Подсказка 2 Подсказка 2 Подсказка 2 Подсказка 2 Подсказка 2 Подсказка 2 Подсказка 2",
  "Подсказка 3 Подсказка 3 Подсказка 3 Подсказка 3 Подсказка 3 Подсказка 3 Подсказка 3 Подсказка 3 Подсказка 3 Подсказка 3 Подсказка 3",
  "Подсказка 4 Подсказка 4 Подсказка 4 Подсказка 4 Подсказка 4 Подсказка 4 Подсказка 4 Подсказка 4 Подсказка 4 Подсказка 4 Подсказка 4",
]

$('.answer').click(function(){

  $('.answer').removeClass('correct');
  $('.answer').removeClass('incorrect');

  var clickedAnswerIndex = parseInt($(this).attr('data-answer'))

  if (clickedAnswerIndex === correctAnswerIndex){
    $(this).addClass('correct');
  }
  else{
    $(this).addClass('incorrect');
  }

  $('.hint__text').text(hints[clickedAnswerIndex]);
})
