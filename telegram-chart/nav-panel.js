const scroller = document.querySelector('.nav-panel__scroller');
const scrollerCenter = document.querySelector('.nav-panel__scroller-center');
const scrollerLeft = document.querySelector('.nav-panel__scroller-left');
const scrollerRight = document.querySelector('.nav-panel__scroller-right');

const minScrollerWidth = 126;
const minScrollerCenterWidth = minScrollerWidth - 26;

scroller.style.right = "0px";
scroller.style.width = minScrollerWidth + "px";

var scrollerCenterHammer = new Hammer(scrollerCenter);
var scrollerLeftHammer = new Hammer(scrollerLeft);
var scrollerRightHammer = new Hammer(scrollerRight);
var oldDistance = 0;
var oldWidthIncrease = 0;

scrollerCenterHammer.on('panend', clearOldValues)

scrollerLeftHammer.on('panend', clearOldValues)

scrollerRightHammer.on('panend', clearOldValues)

function clearOldValues() {
  oldDistance = 0;
  oldWidthIncrease = 0;
}

function getNewMainViewBox(scrollerChange, scrollerDirection) {
  const scrollerChangeInPercents = (scrollerChange / minScrollerCenterWidth);
  const chartViewChange = scrollerChangeInPercents * viewportVisibleWidth;
  const oldViewBox = chartField.getAttribute('viewBox').split(' ').map(item => parseInt(item));
  var newViewBox;
  if (scrollerDirection === 'left') {
    newViewBox = [oldViewBox[0] - chartViewChange, oldViewBox[1], oldViewBox[2], oldViewBox[3]];
  } else if (scrollerDirection === 'right'){
    newViewBox = [oldViewBox[0] + chartViewChange, oldViewBox[1], oldViewBox[2], oldViewBox[3]];
  } else if (scrollerDirection === 'leftWidthIncrease'){
    newViewBox = [oldViewBox[0] - chartViewChange, oldViewBox[1], oldViewBox[2] + chartViewChange, oldViewBox[3]];
  } else if (scrollerDirection === 'leftWidthDecrease'){
    newViewBox = [oldViewBox[0] + chartViewChange, oldViewBox[1], oldViewBox[2] - chartViewChange, oldViewBox[3]];
  } else if (scrollerDirection === 'rightWidthIncrease'){
    newViewBox = [oldViewBox[0], oldViewBox[1], oldViewBox[2] + chartViewChange, oldViewBox[3]];
  } else if (scrollerDirection === 'rightWidthDecrease'){
    newViewBox = [oldViewBox[0], oldViewBox[1], oldViewBox[2] - chartViewChange, oldViewBox[3]];
  }
  return newViewBox;
}


scrollerCenterHammer.on('panmove', function(ev){
  var scrollerChange;
  if (ev.direction === Hammer.DIRECTION_LEFT) {
    scrollerChange = Math.abs(ev.distance - oldDistance)
    scroller.style.right = parseInt(scroller.style.right) + Math.abs(ev.distance - oldDistance) + "px";

    const newViewBox = getNewMainViewBox(scrollerChange, 'left');
    chartField.setAttribute("viewBox", `${newViewBox[0] } ${newViewBox[1]} ${newViewBox[2]} ${newViewBox[3]}`);
  }else {
    scrollerChange =  Math.abs(oldDistance - ev.distance)
    scroller.style.right = parseInt(scroller.style.right) - Math.abs(oldDistance - ev.distance) + "px";
    const newViewBox = getNewMainViewBox(scrollerChange, 'right');
    chartField.setAttribute("viewBox", `${newViewBox[0] } ${newViewBox[1]} ${newViewBox[2]} ${newViewBox[3]}`);
  }

  oldDistance = ev.distance;
})


scrollerLeftHammer.on('panmove', function(ev){
  var scrollerChange = Math.abs(oldWidthIncrease - ev.distance);
  if (ev.direction === Hammer.DIRECTION_LEFT) {
    scroller.style.width = parseInt(scroller.style.width) + Math.abs(ev.distance - oldWidthIncrease) + "px";

    const newViewBox = getNewMainViewBox(scrollerChange, 'leftWidthIncrease');
    chartField.setAttribute("viewBox", `${newViewBox[0] } ${newViewBox[1]} ${newViewBox[2]} ${newViewBox[3]}`);
  }else {
    if (parseInt(scroller.style.width) > minScrollerWidth) {
      scroller.style.width = parseInt(scroller.style.width) - Math.abs(oldWidthIncrease - ev.distance) + "px";

      const newViewBox = getNewMainViewBox(scrollerChange, 'leftWidthDecrease');
      chartField.setAttribute("viewBox", `${newViewBox[0] } ${newViewBox[1]} ${newViewBox[2]} ${newViewBox[3]}`);
    }
  }

  oldWidthIncrease = ev.distance;
})

scrollerRightHammer.on('panmove', function(ev){
  var scrollerChange = Math.abs(ev.distance - oldWidthIncrease);
  if (ev.direction === Hammer.DIRECTION_RIGHT) {
    scroller.style.width = parseInt(scroller.style.width) + scrollerChange + "px";
    scroller.style.right = parseInt(scroller.style.right) - scrollerChange + "px";

    const newViewBox = getNewMainViewBox(scrollerChange, 'rightWidthIncrease');
    chartField.setAttribute("viewBox", `${newViewBox[0] } ${newViewBox[1]} ${newViewBox[2]} ${newViewBox[3]}`);
  }else {
    if (parseInt(scroller.style.width) > minScrollerWidth) {
      scroller.style.width = parseInt(scroller.style.width) - scrollerChange + "px";
      scroller.style.right = parseInt(scroller.style.right) + scrollerChange + "px";

      const newViewBox = getNewMainViewBox(scrollerChange, 'rightWidthDecrease');
      chartField.setAttribute("viewBox", `${newViewBox[0] } ${newViewBox[1]} ${newViewBox[2]} ${newViewBox[3]}`);
    }
  }

  oldWidthIncrease = ev.distance;
})
