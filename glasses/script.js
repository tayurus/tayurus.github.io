var imageWidth = 1200;
var imageHeight = 715;
var glassesWidth = 870;
var glassesHeight = 200;

var image = document.querySelector(".image");
var glasses = document.querySelector(".glasses");
var glassesLeft = document.querySelector(".glasses__left");
var glassesRight = document.querySelector(".glasses__right");

image.addEventListener("mousemove", function(e) {
  glasses.style.left = e.offsetX + 'px';
  glasses.style.top = e.offsetY + 'px';
  glassesLeft.style.backgroundPosition = (-1 * e.offsetX) + 'px ' + (-1 * e.offsetY) + 'px';
  glassesRight.style.backgroundPosition = (-1 * e.offsetX - (glassesWidth / 4)) + 'px ' + (-1 * e.offsetY) + 'px';
});
