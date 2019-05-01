const buttons = document.querySelectorAll('.button');
const html = document.querySelector('html');
Array.from(buttons).forEach( btn => {
  btn.addEventListener('click', function() {
    removeActiveClassFromAllButtons();
    this.classList.add('button_active');
    html.setAttribute("theme", this.getAttribute('data-theme'));
  })
})

function removeActiveClassFromAllButtons() {

  Array.from(buttons).forEach( function(btn) {
    btn.classList.remove('button_active');
  })

}
