document.addEventListener("DOMContentLoaded", function(event) {
  $('.nav-mobile').click(function(){
      if ($('nav').css('display') == 'none'){
          $('header').css('background', '#fff');
          $('nav').css({'display':'flex','left':'50%', 'margin-left':'-65px'})
          $('nav a').css('color','#000');
          $('.nav-mobile div').css('background', '#000');
          $('.nav-mobile div:nth-child(1)').css({'transform' : 'rotate(45deg)','position':'relative','top':'20px'})
          $('.nav-mobile div:nth-child(2)').css('transform', 'rotate(-45deg)')
          $('.nav-mobile div:nth-child(3)').css('display', 'none')
          $('header img').css('visibility', "hidden")
          $("body").css('overflow',"hidden")
      }
      else {
          $('nav').hide()
          $('header').css('background', '#63c3e5');
          $('.nav-mobile div').css('background', '#fff');
          $('.nav-mobile div:nth-child(1)').css({'transform' : 'none','position':'static','top':'0px'})
          $('.nav-mobile div:nth-child(2)').css('transform', 'none')
          $('.nav-mobile div:nth-child(3)').css('display', 'block')
          $('header img').css('visibility', "visible")
          $("body").css('overflow',"auto")
      }
  })

  $('.owl-carousel').owlCarousel({
      items:1,
      dots:true
  })

  $('[src$=".png"]').click(function(){
        window.scrollBy({
            top: $('header').height(), // could be negative value
            left: 0,
            behavior: 'smooth'
        })
  });



});
