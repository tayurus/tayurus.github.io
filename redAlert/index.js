const screenWidth = $(window).width();
const screenHeight = $(window).height();
const body = $("body");
const bombSize = 125;
const bombFallingTime = 2500;

$(document).ready(function() {
  setInterval(dropBomb, 750);
});

function dropBomb() {
  spawnBomb();
  const minX = parseInt($(".bomb:last").css("left"));
  const { top, left } = generateBombObjectiveCoordinates(minX);
  const bomb = $(".bomb:last");

  $(".bomb:last").animate(
    { left: left + "px", top: top + "px" },
    bombFallingTime,
    "linear",
    () => detonateBomb(bomb)
  );
}

function detonateBomb(bomb) {
  bomb.css({
    backgroundImage: "url(explosion.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain"
  });

  setInterval(() => bomb.remove(), 100);
}

function generateBombCoordinates() {
  let x = -100,
    y = -100;
  // 0 = x, 1 = y
  if (_.random(0, 1)) {
    y = _.random(0, Math.floor(screenHeight / 2));
  } else {
    x = _.random(0, Math.floor(screenWidth / 2));
  }

  return { x, y };
}

function generateBombObjectiveCoordinates(minX = 0) {
  const top = screenHeight - bombSize;
  let left = minX + _.random(minX, screenWidth - minX);
  return { top, left };
}

function spawnBomb() {
  const { x, y } = generateBombCoordinates();
  body.append(
    "<div class='bomb' style='top:" + y + "px; left: " + x + "px; '></div>"
  );
}
