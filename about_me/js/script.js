'use strict'
document.addEventListener("DOMContentLoaded", function(event) {
    //текущая координата X, на которую указывает стрелка

    //реакция на клик внутри блока javascript-scale
    $('.javascript-scale').click(function(e) {
        var offset = $(this).offset();
        var value = 0;
        var level = "Начинающий";
        if (e.pageX - offset.left <= 85){
            value = -15;
            level = "Начинающий";
        }

        else if (e.pageX - offset.left > 85 && e.pageX - offset.left <= 200){
            value = 60;
            level = "Уверенный"
        }
        else{
            value = 130;
            level = "Профессионал"
        }



        $('.javascript-scale img').css({
            'transform': 'rotateZ(' + (value) + 'deg)'
        })

        $('.javascript-res div').text(level);

    })
});
