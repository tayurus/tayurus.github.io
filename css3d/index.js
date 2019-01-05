const container3d = document.querySelector(".container3d");
let rotateAllowed = true;

function rotate(direction) {
  if (rotateAllowed) {
    rotateAllowed = false;
    allowRotate(1500);
    const currentAngle = parseInt(
      container3d.style.transform.match(/[0-9]+/gi) || 0
    );

    if (direction === "top") {
      container3d.style.transform = "rotateX(" + (currentAngle - 90) + "deg)";
    } else {
      container3d.style.transform = "rotateX(" + (currentAngle + 90) + "deg)";
    }
  }
}

function allowRotate(time) {
  setTimeout(() => {
    rotateAllowed = true;
  }, time);
}

document.onkeydown = function(e) {
  switch (e.which) {
    case 38: // up
      rotate("top");
      break;

    case 40: // down
      rotate("bottom");
      break;
  }
};

window.onwheel = function(e) {
  if (e.deltaY > 0) {
    rotate("bottom");
  } else {
    rotate("top");
  }
};
