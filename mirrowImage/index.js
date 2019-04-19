const img2Wrap = document.querySelector('#wrap2');
const img2 = document.querySelector('.wrapper__img2');

function moveImg2(e) {
  img2Wrap.style.left = event.pageX + 'px';
  img2.style.marginLeft = -1 * event.pageX + 'px';
}

window.addEventListener('mousemove', moveImg2);
