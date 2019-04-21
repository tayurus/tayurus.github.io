const img2 = document.querySelector('.img_2');

document.addEventListener('mousemove', event => {
  img2.style.width = event.pageX + 'px';
})
