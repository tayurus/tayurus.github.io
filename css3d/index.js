const container3d = document.querySelector(".container3d");
let rotateAllowed = true;
window.onwheel = function(e) {
  if (rotateAllowed) {
    rotateAllowed = false;
    allowRotate(1500);
    const currentAngle = parseInt(
      container3d.style.transform.match(/[0-9]+/gi) || 0
    );
    if (e.deltaY > 0) {
      container3d.style.transform = "rotateX(" + (currentAngle + 90) + "deg)";
    } else {
      container3d.style.transform = "rotateX(" + (currentAngle - 90) + "deg)";
    }
  }
};

function allowRotate(time) {
  setTimeout(() => {
    rotateAllowed = true;
  }, time);
}
