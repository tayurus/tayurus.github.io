var slideTime = 50

var audio = new Audio('sounds/spining.mp3');
var winItemsCount = 0;
var betBlock = false;
var spinBlock = true;

// var odometer = new Odometer({ el: $('#bet'), value: 123, theme: 'slot-machine' });
$(document).ready(function() {
    $(".item2").css('height', '0vh');
    $(".item2").each(function() {
        randomChangeBackground(this)
    })

    $("#balance").html("340");
    $("#bet").html("100");
    $("#win").html(0);
    setTimeout(function() {
        spinBlock = false
    }, 2000)
})


$(document).on('click', '.button', function() {
    if (!spinBlock) {
        spinBlock = true;
        var currBalance = parseInt($("#balance .odometer-value").text());
        var currBet = parseInt($("#bet .odometer-value").text())
        if (currBet > currBalance) {
            if (audio.paused) {
                audio = new Audio('sounds/nahuy.mp3')
                audio.play()
            }
            spinBlock = false;
            return;
        }

        var descriptor = setInterval(slide, 50)
        setTimeout(function() {
            clearInterval(descriptor);
            setTimeout(checkWin, 200);
            spinBlock = false;
        }, 3700)

        audio.pause()
        audio = new Audio('sounds/spining.mp3')
        audio.play()

        var currBet = parseInt($("#bet .odometer-value").text())
        var currBalance = parseInt($("#balance .odometer-value").text());
        $("#balance").html(currBalance - currBet);
        winItemsCount = 0;
    }
})

function slide() {

    $(".item1").velocity({
        'height': '1vh'
    }, slideTime)
    $(".item2").velocity({
        'height': '20vh'
    }, slideTime, function() {
        $(".item1").remove()
        $(".item2").after('<div class = "item1" style = "height: 0px"></div>')


        $(".item1").each(function() {
            randomChangeBackground(this)
        })



        $(".item2").velocity({
            'height': '1vh'
        }, slideTime)
        $(".item1").velocity({
            'height': '20vh'
        }, slideTime, function() {
            $(".item2").remove()
            $(".item1").after('<div class = "item2" style = "height: 0px"></div>')
            $(".item2").each(function() {
                randomChangeBackground(this)
            })


        })

    })


}

function randomChangeBackground(el) {
    var imageIndex = Math.ceil((Math.random() + 0.01) * 3.5)
    console.log('url(images/' + imageIndex.toString() + '.png)')
    $(el).css('background-image', 'url(images/' + imageIndex.toString() + '.png)');
}



function extractImagesIndexes() {
    var backgrounds = new Array(3)
    for (i = 0; i < 3; i++)
        backgrounds[i] = new Array(5)

    var i = 0,
        j = 0;
    $('.item1').each(function() {
        backgrounds[i][j++] = $(this).css('background-image').charAt($(this).css('background-image').lastIndexOf('.') - 1);
        if (j == 5) {
            j = 0;
            i++
        }

    })

    return backgrounds
}

function checkWin() {
    spinBlock = true;
    var backgrounds = extractImagesIndexes()

    var isWin = horizontalCheck(backgrounds)

    isWin = isWin || verticalCheck(backgrounds)

    if (isWin) {
        audio = new Audio('sounds/win' + Math.ceil((Math.random()) * 3) + '.mp3')
        audio.play()
        var currBet = parseInt($("#bet .odometer-value").text())
        var winSumm = winItemsCount * currBet;
        $("#win").html(winSumm);
        var currBalance = parseInt($("#balance .odometer-value").text());
        currBalance += winSumm;
        $("#balance").html(currBalance);



    } else {
        audio = new Audio('sounds/loose' + Math.ceil((Math.random()) * 3) + '.mp3')
        audio.play()
        $("#win").html(0);
    }

    setTimeout(function() {
        spinBlock = false
    }, 2000)


}

function horizontalCheck(backgrounds) {
    console.log(backgrounds)
    var isWin = false;
    for (var i = 0; i < 3; i++) {
        var sameCount = 1;
        var startIndex = 0;
        for (var j = 0; j < 4; j++)
            if (backgrounds[i][j] === backgrounds[i][j + 1]) {
                if (sameCount === 1)
                    startIndex = j;
                sameCount++;
            }
        else if (sameCount <= 2)
            sameCount = 1;

        if (sameCount >= 3) {
            $(".row" + i.toString() + " .item .item1").each(function(index, element) {
                isWin = true;

                if (index >= startIndex && index < startIndex + sameCount) {
                    $(this).css('border', '5px solid red')
                    setTimeout(() => {
                        $(this).css('background-image', 'url("images/explosive.gif")')
                    }, 3400);

                }

            })
            winItemsCount += sameCount;
        }
    }

    return isWin;
}


function verticalCheck(backgrounds) {
    var isWin = false;
    var winColumns = []
    for (var i = 0; i < 5; i++) {
        if (backgrounds[0][i] === backgrounds[1][i] && backgrounds[0][i] === backgrounds[2][i]) {
            $(".row0 .item").eq(i).find(".item1").css('border', '5px solid red')
            $(".row1 .item").eq(i).find(".item1").css('border', '5px solid red')
            $(".row2 .item").eq(i).find(".item1").css('border', '5px solid red')
            winItemsCount += 3;
            winColumns.push(i)
            isWin = true;
        }
    }

    winColumns.forEach(function(el) {
        setTimeout(function() {
            $(".row0 .item").eq(el).find(".item1").css('background-image', 'url("images/explosive.gif")')
            $(".row1 .item").eq(el).find(".item1").css('background-image', 'url("images/explosive.gif")')
            $(".row2 .item").eq(el).find(".item1").css('background-image', 'url("images/explosive.gif")')
        }, 3400, el)
    })

    return isWin;
}

$(document).on('click', ".btn-danger", function() {
    if (!betBlock) {
        var currBet = parseInt($("#bet .odometer-value").text())
        if (currBet - 10 <= 0) {
            if (audio.paused) {
                audio = new Audio('sounds/nahuy.mp3')
                audio.play()
            }

        } else {
            currBet -= 10;
            $("#bet").html(currBet.toString())
            betBlock = true;
            spinBlock = true;
            setTimeout(function() {
                betBlock = false;
                spinBlock = false;
            }, 1200)
        }
    }
})


$(document).on('click', ".btn-success", function() {
    if (!betBlock) {
        var currBalance = parseInt($("#balance .odometer-value").text());
        var currBet = parseInt($("#bet .odometer-value").text())
        if (currBet + 10 > currBalance) {
            if (audio.paused) {
                audio = new Audio('sounds/nahuy.mp3')
                audio.play()
            }
        } else {
            currBet += 10;
            $("#bet").html(currBet.toString())
            betBlock = true;
            spinBlock = true;
            setTimeout(function() {
                betBlock = false;
                spinBlock = false;
            }, 1200)
        }
    }
})
