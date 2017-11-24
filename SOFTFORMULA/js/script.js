$(document).ready(function(){

    $('[type="tel"]').blur(function(){
        var isnum = /^\d+$/.test($(this).val());
        if (!isnum || $(this).val().length < 6)
        {
            $(this).css('border','3px dotted red');
            $(this).parent().find('.incorrectPhone').text('Неверный номер');
        }
        else
        {
            $(this).css('border','none');
            $(this).css('backgroundImage', 'url("img/ok.png")');
            $(this).parent().find('.incorrectPhone').text('');
        }

    })
    $('[type="email"]').blur(function(){

        var ismail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (ismail.test($(this).val()) === false)
        {
            $(this).css('border','3px dotted red');
            $(this).parent().find('.incorrectMail').text('Неверный email');
        }

        else
        {
            $(this).css('border','none');
            $(this).css('backgroundImage', 'url("img/ok.png")');
            $(this).parent().find('.incorrectMail').text('');
        }

    })

    $('.header-spb').click(function(){
        $('.header-spb').addClass('activeCity');
        $('.header-msk').removeClass('activeCity');
        $('.header-content-contacts-phone').text('+7 (812) 245 37 60')
    })
    $('.header-msk').click(function(){
        $('.header-msk').addClass('activeCity');
        $('.header-spb').removeClass('activeCity');
        $('.header-content-contacts-phone').text('+7 (495) 256 04 95')
    })


    $('.footer-spb').click(function(){
        $('.footer-spb').addClass('activeCity');
        $('.footer-msk').removeClass('activeCity');
        $('.footer-tel').text('+7 (812) 245 37 60');
        $('.footer-adres').text('Санкт-Петербург ул. Афонская, д.2, оф. 3-408');

    })
    $('.footer-msk').click(function(){
        $('.footer-msk').addClass('activeCity');
        $('.footer-spb').removeClass('activeCity');
        $('.footer-tel').text('+7 (495) 256 04 95')
        $('.footer-adres').text('Москва, ул. Шаболовка, д. 34, стр. 3')
    })


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

        $('.footer-spb').click();

})
