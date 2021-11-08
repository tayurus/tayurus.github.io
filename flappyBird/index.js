document.addEventListener('DOMContentLoaded', () => {

  const FPS = 60;

  const HALF_OF_CIRCLE = 180;
  const WIDTH = 480;
  const HEIGHT = 640;
  const BIRD_WIDTH = 50;
  const BIRD_HEIGHT = 50;
  const CENTER_Y = HEIGHT / 2;
  const CENTER_X = WIDTH / 2;
  const BIRD_IMAGE_X_OFFSET = 92;
  const BIRD_IMAGE_Y_OFFSET = 70;
  const MAX_BIRD_Y_INITIAL = CENTER_Y + 26;
  const BIRD_Y_INITIAL_STEP = 1;
  const BIRD_FLY_TIME_WITH_ONE_CLICK = 500;
  const BIRD_FLY_INTERVAL = 150;
  const MOVE_SPEED = 3;
  const GROUND_HEIGHT = 128;
  const GROUND_WIDTH = 37;
  const RESTART_TEXT = 'restart';
  const RESTART_FONT_SIZE = 32;
  const USER_SCORE_FONT_SIZE = 48;
  const RESTART_BTN_X_PADDING = 20;
  const BTN_RESTART_BG = '#e86100';
  const BTN_TEXT_COLOR = '#fff';
  const USER_SCORE_Y_OFFSET = 200;
  const PIPE_ORIGINAL_WIDTH = 138;
  const PIPE_ORIGINAL_HEIGHT = 793;
  const PIPE_WIDTH = 90;
  const MIN_PIPE_HEIGHT = 50;
  const MAX_PIPE_HEIGHT = HEIGHT - 400;
  const DISTANCE_BETWEEN_PIPES_Y = 200;
  const DISTANCE_BETWEEN_PIPES_X = WIDTH / 2 + PIPE_WIDTH / 2;
  const birdX = CENTER_X - BIRD_WIDTH * 2;

  // на сколько птичка поднимается вверх при нажатии
  const BIRD_ON_CLICK_Y_OFFSET = 100;

  // на сколько птичка поднимается вверх за один кадр
  const BIRD_ONE_FPS_OFFSET = 5;
  const BIRD_BOOST = 5;

  let birdInitialDirection = 'up';
  let groundX = 0;
  let firstPipeX = WIDTH;
  let secondPipeX = WIDTH + DISTANCE_BETWEEN_PIPES_X;
  let birdY = CENTER_Y - BIRD_HEIGHT / 2;
  let birdFrame = 0;
  let gameStart = false;
  let gameEnd = false;
  let birdFalling = false;
  let currentBirdFlyTime = 0;
  let birdFlyDescriptor = -1;
  let birdFlying = false;
  let restartButtonPath;
  let userScore = 0;
  let firstBottomPipeHeight, firstTopPipeHeight;
  let secondBottomPipeHeight, secondTopPipeHeight;
  let firstTopPipePath = new Path2D(),
    firstBottomPipePath = new Path2D(),
    secondTopPipePath = new Path2D(),
    secondBottomPipePath = new Path2D();

  let birdRotateAngle = 0;

  // текущая максимальная высота, куда может подняться птица
  let currentMaxBirdY = birdY;

  const bg = new Image();
  const ground = new Image();
  const bird = new Image();
  const pipe = new Image();
  const canvas = document.querySelector('#canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  bg.src = './assets/background.png';
  ground.src = './assets/ground.png';
  bird.src = './assets/bird.png';
  pipe.src = './assets/pipe.png';
  ctx.font = `${RESTART_FONT_SIZE}px Arial`;
  const BTN_RESTART_TEXT_WIDTH = ctx.measureText(RESTART_TEXT).width;

  const angleToRadians = (angle) => angle * Math.PI / HALF_OF_CIRCLE;

  function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function generatePipe() {
    // случайно генерируем высоту нижней трубы
    const bottomPipeHeight = getRandomNumber(MIN_PIPE_HEIGHT, MAX_PIPE_HEIGHT);
    const topPipeHeight = HEIGHT - GROUND_HEIGHT - bottomPipeHeight - DISTANCE_BETWEEN_PIPES_Y;
    return { bottomPipeHeight, topPipeHeight };
  }

  function drawPipe(ctx, pipeX, bottomPipeHeight, topPipeHeight, pipeNumber) {

    if (pipeNumber === 1) {
      firstBottomPipePath = new Path2D();
      firstTopPipePath = new Path2D();
      firstBottomPipePath.rect(pipeX, HEIGHT - (GROUND_HEIGHT + bottomPipeHeight), PIPE_WIDTH, bottomPipeHeight);
      // ctx.fill(firstBottomPipePath);

      firstTopPipePath.rect(pipeX, 0, PIPE_WIDTH, firstTopPipeHeight);
      // ctx.fill(firstTopPipePath);
    }

    if (pipeNumber === 2) {
      secondBottomPipePath = new Path2D();
      secondTopPipePath = new Path2D();
      secondBottomPipePath.rect(pipeX, HEIGHT - (GROUND_HEIGHT + bottomPipeHeight), PIPE_WIDTH, bottomPipeHeight);
      // ctx.fill(secondBottomPipePath);

      secondTopPipePath.rect(pipeX, 0, PIPE_WIDTH, secondTopPipeHeight);
      // ctx.fill(secondTopPipePath);
    }

    ctx.save();
    ctx.drawImage(pipe, 0, 0, PIPE_ORIGINAL_WIDTH, bottomPipeHeight, pipeX, HEIGHT - GROUND_HEIGHT - bottomPipeHeight, PIPE_WIDTH, bottomPipeHeight);
    ctx.rotate(angleToRadians(HALF_OF_CIRCLE));
    ctx.drawImage(pipe, 0, 0, PIPE_ORIGINAL_WIDTH, topPipeHeight, -PIPE_WIDTH - pipeX, -topPipeHeight, PIPE_WIDTH, topPipeHeight);
    ctx.restore();



  }

  function drawRestartButton(ctx) {
    ctx.save();
    restartButtonPath = new Path2D();
    restartButtonPath.rect(WIDTH / 2 - BTN_RESTART_TEXT_WIDTH / 2 - RESTART_BTN_X_PADDING / 2, HEIGHT / 2 - RESTART_FONT_SIZE / 1.2, BTN_RESTART_TEXT_WIDTH + RESTART_BTN_X_PADDING, RESTART_FONT_SIZE);
    ctx.stroke(restartButtonPath);
    ctx.fillStyle = BTN_RESTART_BG;
    ctx.fill(restartButtonPath);
    ctx.fillStyle = BTN_TEXT_COLOR;
    ctx.fillText(RESTART_TEXT, WIDTH / 2 - BTN_RESTART_TEXT_WIDTH / 2, HEIGHT / 2);
    ctx.restore();
  }

  function drawScore(ctx) {
    ctx.save();
    ctx.font = `${USER_SCORE_FONT_SIZE}px FB`;
    ctx.lineWidth = 5;
    let userScoreWidth = ctx.measureText(userScore.toString()).width;
    ctx.strokeText(userScore, WIDTH / 2 - userScoreWidth / 2, HEIGHT / 2 - USER_SCORE_Y_OFFSET);

    ctx.fillStyle = '#fff';
    ctx.fillText(userScore, WIDTH / 2 - userScoreWidth / 2, HEIGHT / 2 - USER_SCORE_Y_OFFSET);
    ctx.restore();
  }

  function checkIfNeedReplacePipes() {
    if (firstPipeX <= -PIPE_WIDTH) {
      firstPipeX = WIDTH;
      const firstPipeHeights = generatePipe();
      firstBottomPipeHeight = firstPipeHeights.bottomPipeHeight;
      firstTopPipeHeight = firstPipeHeights.topPipeHeight;
    }
    if (secondPipeX <= -PIPE_WIDTH) {
      secondPipeX = WIDTH;
      const secondPipeHeights = generatePipe();
      secondBottomPipeHeight = secondPipeHeights.bottomPipeHeight;
      secondTopPipeHeight = secondPipeHeights.topPipeHeight;
    }
  }

  function changeInitialBirdYCoordinate() {
    if (birdInitialDirection === 'down' && !gameStart && !gameEnd) {
      birdY += BIRD_Y_INITIAL_STEP;

      if (birdY === MAX_BIRD_Y_INITIAL) {
        birdInitialDirection = 'up';
      }
    } else if (birdInitialDirection === 'up' && !gameStart && !gameEnd) {
      birdY -= BIRD_Y_INITIAL_STEP;

      if (birdY <= CENTER_Y) {
        birdInitialDirection = 'down';
      }
    }
  }

  function drawBird(ctx) {
    ctx.save();

    // ctx.translate(birdX, HEIGHT / 2 - BIRD_HEIGHT / 2 + birdY);

    // смотрим, пересекла ли птичка трубу, если да, увеличиваем счет игрока
    if ((birdX - firstPipeX <= 2 && birdX - firstPipeX >= 0) || (birdX - secondPipeX <= 2 && birdX - secondPipeX >= 0)) {
      userScore++;
    }


    if (birdFlying) {
      if (birdRotateAngle > -45) {
        birdRotateAngle -= 45;
      }
      ctx.translate(birdX + BIRD_WIDTH / 2, birdY + BIRD_HEIGHT / 2);
      ctx.rotate(angleToRadians(birdRotateAngle));
      ctx.drawImage(bird, 0 + birdFrame * BIRD_IMAGE_X_OFFSET, 0, BIRD_IMAGE_X_OFFSET, BIRD_IMAGE_Y_OFFSET, -BIRD_WIDTH / 2, -BIRD_HEIGHT / 2, BIRD_WIDTH, BIRD_HEIGHT);
    } else {
      if (gameStart) {
        if (birdRotateAngle < 5) {
          birdRotateAngle += 2;
        }
        else if (birdRotateAngle < 90) {
          birdRotateAngle += 15;
        }
        ctx.translate(birdX + BIRD_WIDTH / 2, birdY + BIRD_HEIGHT / 2);
        ctx.rotate(angleToRadians(birdRotateAngle));
        ctx.drawImage(bird, 1 * BIRD_IMAGE_X_OFFSET, 0, BIRD_IMAGE_X_OFFSET, BIRD_IMAGE_Y_OFFSET, -BIRD_WIDTH / 2, -BIRD_HEIGHT / 2, BIRD_WIDTH, BIRD_HEIGHT);
      } else {
        ctx.translate(birdX + BIRD_WIDTH / 2, birdY + BIRD_HEIGHT / 2);
        ctx.rotate(angleToRadians(birdRotateAngle));
        ctx.drawImage(bird, 1 * BIRD_IMAGE_X_OFFSET, 0, BIRD_IMAGE_X_OFFSET, BIRD_IMAGE_Y_OFFSET, -BIRD_WIDTH / 2, -BIRD_HEIGHT / 2, BIRD_WIDTH, BIRD_HEIGHT);
        // ctx.drawImage(bird, 1 * BIRD_IMAGE_X_OFFSET, 0, BIRD_IMAGE_X_OFFSET, BIRD_IMAGE_Y_OFFSET, birdX, birdY, BIRD_WIDTH, BIRD_HEIGHT);
      }


    }
    ctx.restore();
  }

  function drawGround() {
    const groundImagesCount = Math.ceil(WIDTH / GROUND_WIDTH);
    for (let i = 0; i < groundImagesCount * 2; i++) {
      // рисуем двигающуюся землю
      ctx.drawImage(ground, i * GROUND_WIDTH + groundX, HEIGHT - GROUND_HEIGHT);
    }

    groundX -= MOVE_SPEED;

    // сбрасываем groundX, если дошли до конца или игра закончилась
    if (Math.abs(groundX) >= groundImagesCount * GROUND_WIDTH || gameEnd) {
      groundX = 0;
    }
  }

  function birdFall() {
    gameStart = false;
    birdFlying = false;
    gameEnd = true;
    birdFalling = true;
  }

  function handleMouseOrSpace(e) {
    // нажатие на restart
    if (gameEnd && restartButtonPath !== undefined && ctx.isPointInPath(restartButtonPath, e.offsetX, e.offsetY)) {
      gameStart = false;
      birdFalling = false;
      gameEnd = false;
      birdY = CENTER_Y - BIRD_WIDTH / 2;
      firstPipeX = WIDTH;
      secondPipeX = WIDTH + DISTANCE_BETWEEN_PIPES_X;
      userScore = 0;
      return;
    }

    if (!birdFlying) {
      birdRotateAngle = 0;
    }

    if (gameEnd) {
      return;
    }


    if (!gameStart) {
      const firstPipe = generatePipe();
      const secondPipe = generatePipe();
      firstBottomPipeHeight = firstPipe.bottomPipeHeight;
      firstTopPipeHeight = firstPipe.topPipeHeight;
      secondBottomPipeHeight = secondPipe.bottomPipeHeight;
      secondTopPipeHeight = secondPipe.topPipeHeight;
      gameStart = true;
      birdY = CENTER_Y - BIRD_WIDTH / 2;
    }

    if (!birdFlying) {
      currentMaxBirdY = birdY - BIRD_ON_CLICK_Y_OFFSET;
      birdFlying = true;
    }

    // birdFlyDescriptor = setInterval(() => {
    //   birdFrame++;
    //   birdFrame = birdFrame % 3;
    //   currentBirdFlyTime += BIRD_FLY_INTERVAL;
    //   if (currentBirdFlyTime >= BIRD_FLY_TIME_WITH_ONE_CLICK) {
    //     clearInterval(birdFlyDescriptor);
    //     birdFlying = false;
    //   }
    // }, BIRD_FLY_INTERVAL);
    //
    //
    // currentBirdFlyTime = 0;
  }

  canvas.addEventListener('click', (e) => {
    handleMouseOrSpace(e);
  });

  document.body.onkeyup = function(e){
    if(e.keyCode == 32){
      handleMouseOrSpace(e);
    }
  }

  main();

  function main() {
    clearCanvas();


    draw();
    // подъем при нажатии
    if (birdFlying && birdY >= currentMaxBirdY) {
      birdY -= BIRD_ONE_FPS_OFFSET + BIRD_BOOST;

      if (birdY <= currentMaxBirdY) {
        birdFlying = false;
      }

    } else if (!birdFlying && gameStart) {
      birdY += BIRD_ONE_FPS_OFFSET;
    }

    if (birdFalling) {
      if (birdY < HEIGHT - GROUND_HEIGHT - BIRD_HEIGHT / 2) {
        birdY += BIRD_ONE_FPS_OFFSET;
      } else {
        birdFalling = false;
      }
    } else if (gameStart){
      const birdCenterX = birdX + BIRD_WIDTH / 2 - 15;
      const birdCenterY = birdY + BIRD_HEIGHT / 2 - 10;

      // верхний левый угол
      const topLeftBirdX = birdCenterX - BIRD_WIDTH / 2;
      const topLeftBirdY = birdCenterY - BIRD_HEIGHT / 2;

      // верхний правый угол
      const topRightBirdX = birdCenterX + BIRD_WIDTH / 2;
      const topRightBirdY = birdCenterY - BIRD_HEIGHT / 2;

      // нижний правый угол
      const bottomRightBirdX = birdCenterX + BIRD_WIDTH / 2;
      const bottomRightBirdY = birdCenterY + BIRD_HEIGHT / 2;

      // нижний левый угол
      const bottomLeftBirdX = birdCenterX - BIRD_WIDTH / 2;
      const bottomLeftBirdY = birdCenterY + BIRD_HEIGHT / 2;

      // проверка, что птичка разбилась об землю
      if (bottomLeftBirdY >= HEIGHT - GROUND_HEIGHT) {
        birdFall()
      }

      // проверка, что птичка врезалась в трубу

      const pipesPathes = [
        firstBottomPipePath,
        firstTopPipePath,
        secondBottomPipePath,
        secondTopPipePath
      ];

      pipesPathes.forEach(pipePath => {
        if (ctx.isPointInPath(pipePath, topLeftBirdX, topLeftBirdY)) {
          // alert(`birdY CRASH = ${birdY}`);
          birdFall()
        }
        if (ctx.isPointInPath(pipePath, topRightBirdX, topRightBirdY)) {
          // alert(`birdY CRASH = ${birdY}`);
          birdFall()
        }

        if (ctx.isPointInPath(pipePath, bottomRightBirdX, bottomRightBirdY)) {
          // alert(`birdY CRASH = ${birdY}`);
          birdFall()
        }
        if (ctx.isPointInPath(pipePath, bottomLeftBirdX, bottomLeftBirdY)) {
          // alert(`birdY CRASH = ${birdY}`);
          birdFall()
        }
      });
    }



    window.requestAnimationFrame(main);

  }

  function clearCanvas() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
  }

  function draw() {

    // рисуем задний фон
    ctx.drawImage(bg, 0, 0, bg.width, bg.height, 0, 0, canvas.width, canvas.height - GROUND_HEIGHT);
    changeInitialBirdYCoordinate();
    drawGround();
    if (gameStart) {
      firstPipeX -= MOVE_SPEED;
      secondPipeX -= MOVE_SPEED;
      drawPipe(ctx, firstPipeX, firstBottomPipeHeight, firstTopPipeHeight, 1);
      drawPipe(ctx, secondPipeX, secondBottomPipeHeight, secondTopPipeHeight, 2);
    }
    checkIfNeedReplacePipes();
    // кнопка рестарт
    if (gameEnd) {
      drawPipe(ctx, firstPipeX, firstBottomPipeHeight, firstTopPipeHeight, 1);
      drawPipe(ctx, secondPipeX, secondBottomPipeHeight, secondTopPipeHeight, 2);
      drawRestartButton(ctx);
    }
    drawBird(ctx);
    if (gameStart) {
      drawScore(ctx);
    }

  }

});
