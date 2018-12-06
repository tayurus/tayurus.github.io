document.addEventListener("DOMContentLoaded", function() {
  let selectOption = document.querySelector(".select__selected-option");
  let options = document.querySelector(".options");
  let body = document.getElementsByTagName("body")[0];

  selectOption.onclick = function(e) {
    e.stopPropagation();
    options.classList.toggle("hide");
  };

  body.onclick = function() {
    options.classList.add("hide");
  };

  let optionsList = document.querySelectorAll(".option");
  Array.from(optionsList).forEach(opt => {
    opt.onclick = function(e) {
      selectOption.innerHTML = opt.outerHTML;
    };
  });

  var speaker = document.querySelector(".speaker");
  var video = document.querySelector(".enter__video");

  // video.trigger()

  speaker.onclick = function() {
    if (video.muted) {
      video.muted = false;
    } else {
      video.muted = true;
    }
  };

  var player = document.querySelector(".player");

  player.onclick = function() {
    var video = document.querySelector(".enter__video");
    var picture = document.querySelector(".enter__picture");

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    video.classList.toggle("hidden");
    picture.classList.toggle("hidden");
  };
});
