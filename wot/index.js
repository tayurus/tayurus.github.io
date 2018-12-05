document.addEventListener('DOMContentLoaded', function() {


  var speaker = document.querySelector('.speaker');
  var video = document.querySelector(".enter__video");

  // video.trigger()

  speaker.onclick = function() {
    if (video.muted) {
      video.muted = false;
    } else {
      video.muted = true;
    }
  }

  var player = document.querySelector('.player');

  player.onclick = function() {

    var video = document.querySelector(".enter__video");
    var picture = document.querySelector(".enter__picture");

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    video.classList.toggle('hidden');
    picture.classList.toggle('hidden');

  }
})
