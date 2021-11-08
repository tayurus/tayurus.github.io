document.addEventListener("DOMContentLoaded", function(event) {
    var $body = $('body'),
              $open = $('[data-menu-open]'),
              $close = $('[data-menu-close]');

          $open.on('click', onOpenMenu);
          $close.on('click', onCloseMenu);

          function onOpenMenu(e) {
              e.preventDefault();
              $body.addClass('menu-opened');
          }

          function onCloseMenu(e) {
              e.preventDefault();
              $body.removeClass('menu-opened');
          }

      $('.down').click(function(){
            window.scrollBy({
                top: $('header').outerHeight() ,
                left: 0,
                behavior: 'smooth'
            })
      });

      $('.toTop').click(function(){
            $('body,html').animate({scrollTop:0},800);
      });

});
