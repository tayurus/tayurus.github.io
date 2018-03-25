$(document).ready(function() {

    //Interface
    let block = false;
    let currentVoice = 1;
    $(".ready").click(function() {
        $(".ready").hide();
        let playSound = new Audio('sounds/voices/0.wav');
        playSound.play();
        $(".play-label").fadeIn(500);

        setTimeout(function() {
            $(".game").fadeIn(500);
            $(".play-label").fadeOut(500);
            $('html,body').animate({
            scrollTop: $(".game").offset().top},
            'slow');
        },500)
    });




    //Game logic
    let score = 0;
    let rowCount = 4;
    let colCount = 4;
    let arr = Array(rowCount).fill(0).map(x => Array(colCount).fill(x));

    let gameOver = false;
    spawnNumber(2);
    updateTable();
    document.onkeydown = checkKey;

    function moveCells(direction) {
        let row = 0,
            col = 0;
        if (direction === "down") {
            row = rowCount - 1;
            for (; row >= 0; row--)
                for (col = 0; col < colCount; col++)
                    if (arr[row][col] > 0)
                        moveCell(row, col, direction);
        } else if (direction === "right") {
            for (; row < rowCount; row++)
                for (col = colCount - 1; col >= 0; col--)
                    if (arr[row][col] > 0)
                        moveCell(row, col, direction);
        } else
            for (row = 0; row < rowCount; row++)
                for (col = 0; col < colCount; col++)
                    if (arr[row][col] > 0)
                        moveCell(row, col, direction);

    }

    function moveCell(row, col, direction) {
        if (direction === "up") {
            while (true)
                if (row > 0) {
                    if (arr[row - 1][col] == 0) {
                        [arr[row][col], arr[row - 1][col]] = [arr[row - 1][col], arr[row][col]];
                        row--;
                    } else if (arr[row - 1][col] == arr[row][col]) {
                        score += parseInt(arr[row - 1][col]);
                        arr[row - 1][col] *= 2;
                        arr[row][col] = 0;
                        break;
                    } else
                        break;
                }
            else
                break;
        }
        if (direction === "down") {
            while (true)
                if (row < rowCount - 1) {
                    if (arr[row + 1][col] == 0) {
                        [arr[row][col], arr[row + 1][col]] = [arr[row + 1][col], arr[row][col]];
                        row++;
                    } else if (arr[row + 1][col] == arr[row][col]) {
                        score += parseInt(arr[row + 1][col]);
                        arr[row + 1][col] *= 2;
                        arr[row][col] = 0;
                        break;
                    } else
                        break;
                }
            else
                break;
        }
        if (direction === "left") {
            while (true)
                if (col > 0) {
                    if (arr[row][col - 1] == 0) {
                        [arr[row][col - 1], arr[row][col]] = [arr[row][col], arr[row][col - 1]];
                        col--;
                    } else if (arr[row][col - 1] == arr[row][col]) {
                        score += parseInt(arr[row][col - 1]);
                        arr[row][col - 1] *= 2;
                        arr[row][col] = 0;
                        break;
                    } else
                        break;
                }
            else
                break;
        }
        if (direction === "right") {
            while (true)
                if (col < colCount - 1) {
                    if (arr[row][col + 1] == 0) {
                        [arr[row][col + 1], arr[row][col]] = [arr[row][col], arr[row][col + 1]];
                        col++;
                    } else if (arr[row][col + 1] == arr[row][col]) {
                        score += parseInt(arr[row][col + 1]);
                        arr[row][col + 1] *= 2;
                        arr[row][col] = 0;
                        break;
                    } else
                        break;
                }
            else
                break;
        }
    }

    function checkKey(e) {
        if (!gameOver && !block) {
            block = true;
            e = e || window.event;
            let moveSound = new Audio('sounds/moveSound/1.mp3');
            moveSound.play();
            if (e.keyCode == '38') {
                // up arrow
                moveCells("up");
                console.log(arr);
            } else if (e.keyCode == '40') {
                // down arrow
                moveCells("down");
                console.log(arr);
            } else if (e.keyCode == '37') {
                // left arrow
                moveCells("left");
                console.log(arr);
            } else if (e.keyCode == '39') {
                // right arrow
                moveCells("right");
                console.log(arr);
            }

            spawnNumber(2);
            updateTable();
            $(".score span").text(score);

            setTimeout(function() {
                block = false;
            },300);
        }
    }

    function spawnNumber(number) {
        // test  - is it possible to locate another "2"
        let filledCount = 0;
        for (let i = 0; i < rowCount; i++)
            for (let j = 0; j < colCount; j++)
                if (arr[i][j] !== 0)
                    filledCount++;

        // if there is no empty cells
        if (filledCount === rowCount * colCount)
            alert("You've failed to achive victory! (проще говоря GAME OVER)");
        else {
            let row = Math.round(Math.random() * (rowCount - 1)),
                col = Math.round(Math.random() * (colCount - 1));
            console.log(row, col);
            while (arr[row][col] !== 0) {
                row = Math.round(Math.random() * (rowCount - 1));
                col = Math.round(Math.random() * (colCount - 1));
            }
            arr[row][col] = number;
            $("table tr:eq(" + row + ") td:eq(" + col + ")").fadeOut(1);
            $("table tr:eq(" + row + ") td:eq(" + col + ")").fadeIn(500);
        }
    }

    function updateTable() {
        for (let i = 0; i < rowCount; i++)
            for (let j = 0; j < colCount; j++) {
                $("table tr:eq(" + i + ") td:eq(" + j + ")").text(arr[i][j]);
                $("table tr:eq(" + i + ") td:eq(" + j + ")").removeAttr("class");
                $("table tr:eq(" + i + ") td:eq(" + j + ")").addClass("c" + arr[i][j]);
            }

    }
})
