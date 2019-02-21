// left nav-menu
var burger = document.querySelector('.mobile-burger');
var body = document.querySelector('body');
var navPanel = document.querySelector('.nav-panel');

burger.addEventListener('click', function(e) {
  this.classList.toggle('mobile-burger_opened');
  navPanel.classList.toggle('nav-panel_opened');
  body.classList.toggle('no-overflow');
});


// trade-dashboard's  TABS
var tradeDashboardTabs = document.querySelectorAll('.trade-dashboard__tab');
var tradeDashboardTabsTitles = document.querySelectorAll('.trade-dashboard__tab-title');
tradeDashboardTabsTitles.forEach(function(tab) {
  tab.addEventListener('click', function() {
    removeActiveClass(tradeDashboardTabsTitles);
    removeActiveClass(tradeDashboardTabs);
    tab.classList.add('trade-dashboard__tab-title_active');
    var newActiveTab = document.querySelector("[data-tab=" + tab.getAttribute('data-tabTitle') + "]");
    newActiveTab.classList.add('trade-dashboard__tab_active');
  })
})


// trade-dashboard's currencies TABS
var currenciesTabs = document.querySelectorAll('.trade-dashboard__currency');
currenciesTabs.forEach(function(tab) {
  tab.addEventListener('click', function() {
    removeActiveClass(currenciesTabs);
    tab.classList.add('trade-dashboard__currency_active');
    var cryptoCurrency = document.querySelector(".trade-dashboard__tab_active #trade-dashboard__crypto-currency")
    cryptoCurrency.innerHTML = tab.getAttribute('data-currency');
  })
})


function removeActiveClass(items) {
  const activeClassRegex = new RegExp(/([a-z\_]+_active)/gi);

  items.forEach(function(item) {
    if (item.className.match(activeClassRegex)) {
      item.className = item.className.replace(activeClassRegex, '')
    }
  })
}


// CUSTOM SELECT
var options = document.querySelector(".custom-select__options");
var selectRow = document.querySelector(".custom-select__row");
var selectOption = document.querySelector(".custom-select__option");
var body = document.querySelector("body");

body.onclick = function() {
  options.classList.add("custom-select__options_hide");
};

selectOption.onclick = function(e) {
  e.stopPropagation();
  options.classList.toggle("custom-select__options_hide");
};

selectRow.onclick = function(e) {
  e.stopPropagation();
  options.classList.toggle("custom-select__options_hide");
};

let optionsList = document.querySelectorAll(".custom-select__option");
 Array.from(optionsList).forEach(opt => {
   opt.onclick = function(e) {
     selectOption.innerHTML = opt.outerHTML;
   };
 });


 // INPUT OVERFLOW
 //	making the input editable
 var inputs = document.querySelectorAll('.input');
 inputs.forEach( input => {
   input.addEventListener('click', function() {
     this.setAttribute('readonly', '');
     this.focus();
   })
 });

 inputs.forEach( input => {
   input.addEventListener('blur', function() {
     this.setAttribute('readonly', 'readonly');
   })
 });
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGxlZnQgbmF2LW1lbnVcclxudmFyIGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtYnVyZ2VyJyk7XHJcbnZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG52YXIgbmF2UGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LXBhbmVsJyk7XHJcblxyXG5idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdtb2JpbGUtYnVyZ2VyX29wZW5lZCcpO1xyXG4gIG5hdlBhbmVsLmNsYXNzTGlzdC50b2dnbGUoJ25hdi1wYW5lbF9vcGVuZWQnKTtcclxuICBib2R5LmNsYXNzTGlzdC50b2dnbGUoJ25vLW92ZXJmbG93Jyk7XHJcbn0pO1xyXG5cclxuXHJcbi8vIHRyYWRlLWRhc2hib2FyZCdzICBUQUJTXHJcbnZhciB0cmFkZURhc2hib2FyZFRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudHJhZGUtZGFzaGJvYXJkX190YWInKTtcclxudmFyIHRyYWRlRGFzaGJvYXJkVGFic1RpdGxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50cmFkZS1kYXNoYm9hcmRfX3RhYi10aXRsZScpO1xyXG50cmFkZURhc2hib2FyZFRhYnNUaXRsZXMuZm9yRWFjaChmdW5jdGlvbih0YWIpIHtcclxuICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIHJlbW92ZUFjdGl2ZUNsYXNzKHRyYWRlRGFzaGJvYXJkVGFic1RpdGxlcyk7XHJcbiAgICByZW1vdmVBY3RpdmVDbGFzcyh0cmFkZURhc2hib2FyZFRhYnMpO1xyXG4gICAgdGFiLmNsYXNzTGlzdC5hZGQoJ3RyYWRlLWRhc2hib2FyZF9fdGFiLXRpdGxlX2FjdGl2ZScpO1xyXG4gICAgdmFyIG5ld0FjdGl2ZVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10YWI9XCIgKyB0YWIuZ2V0QXR0cmlidXRlKCdkYXRhLXRhYlRpdGxlJykgKyBcIl1cIik7XHJcbiAgICBuZXdBY3RpdmVUYWIuY2xhc3NMaXN0LmFkZCgndHJhZGUtZGFzaGJvYXJkX190YWJfYWN0aXZlJyk7XHJcbiAgfSlcclxufSlcclxuXHJcblxyXG4vLyB0cmFkZS1kYXNoYm9hcmQncyBjdXJyZW5jaWVzIFRBQlNcclxudmFyIGN1cnJlbmNpZXNUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRyYWRlLWRhc2hib2FyZF9fY3VycmVuY3knKTtcclxuY3VycmVuY2llc1RhYnMuZm9yRWFjaChmdW5jdGlvbih0YWIpIHtcclxuICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIHJlbW92ZUFjdGl2ZUNsYXNzKGN1cnJlbmNpZXNUYWJzKTtcclxuICAgIHRhYi5jbGFzc0xpc3QuYWRkKCd0cmFkZS1kYXNoYm9hcmRfX2N1cnJlbmN5X2FjdGl2ZScpO1xyXG4gICAgdmFyIGNyeXB0b0N1cnJlbmN5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50cmFkZS1kYXNoYm9hcmRfX3RhYl9hY3RpdmUgI3RyYWRlLWRhc2hib2FyZF9fY3J5cHRvLWN1cnJlbmN5XCIpXHJcbiAgICBjcnlwdG9DdXJyZW5jeS5pbm5lckhUTUwgPSB0YWIuZ2V0QXR0cmlidXRlKCdkYXRhLWN1cnJlbmN5Jyk7XHJcbiAgfSlcclxufSlcclxuXHJcblxyXG5mdW5jdGlvbiByZW1vdmVBY3RpdmVDbGFzcyhpdGVtcykge1xyXG4gIGNvbnN0IGFjdGl2ZUNsYXNzUmVnZXggPSBuZXcgUmVnRXhwKC8oW2EtelxcX10rX2FjdGl2ZSkvZ2kpO1xyXG5cclxuICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgIGlmIChpdGVtLmNsYXNzTmFtZS5tYXRjaChhY3RpdmVDbGFzc1JlZ2V4KSkge1xyXG4gICAgICBpdGVtLmNsYXNzTmFtZSA9IGl0ZW0uY2xhc3NOYW1lLnJlcGxhY2UoYWN0aXZlQ2xhc3NSZWdleCwgJycpXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuXHJcbi8vIENVU1RPTSBTRUxFQ1RcclxudmFyIG9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1c3RvbS1zZWxlY3RfX29wdGlvbnNcIik7XHJcbnZhciBzZWxlY3RSb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1c3RvbS1zZWxlY3RfX3Jvd1wiKTtcclxudmFyIHNlbGVjdE9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VzdG9tLXNlbGVjdF9fb3B0aW9uXCIpO1xyXG52YXIgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5cclxuYm9keS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgb3B0aW9ucy5jbGFzc0xpc3QuYWRkKFwiY3VzdG9tLXNlbGVjdF9fb3B0aW9uc19oaWRlXCIpO1xyXG59O1xyXG5cclxuc2VsZWN0T3B0aW9uLm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7XHJcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICBvcHRpb25zLmNsYXNzTGlzdC50b2dnbGUoXCJjdXN0b20tc2VsZWN0X19vcHRpb25zX2hpZGVcIik7XHJcbn07XHJcblxyXG5zZWxlY3RSb3cub25jbGljayA9IGZ1bmN0aW9uKGUpIHtcclxuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIG9wdGlvbnMuY2xhc3NMaXN0LnRvZ2dsZShcImN1c3RvbS1zZWxlY3RfX29wdGlvbnNfaGlkZVwiKTtcclxufTtcclxuXHJcbmxldCBvcHRpb25zTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY3VzdG9tLXNlbGVjdF9fb3B0aW9uXCIpO1xyXG4gQXJyYXkuZnJvbShvcHRpb25zTGlzdCkuZm9yRWFjaChvcHQgPT4ge1xyXG4gICBvcHQub25jbGljayA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICBzZWxlY3RPcHRpb24uaW5uZXJIVE1MID0gb3B0Lm91dGVySFRNTDtcclxuICAgfTtcclxuIH0pO1xyXG5cclxuXHJcbiAvLyBJTlBVVCBPVkVSRkxPV1xyXG4gLy9cdG1ha2luZyB0aGUgaW5wdXQgZWRpdGFibGVcclxuIHZhciBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQnKTtcclxuIGlucHV0cy5mb3JFYWNoKCBpbnB1dCA9PiB7XHJcbiAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJycpO1xyXG4gICAgIHRoaXMuZm9jdXMoKTtcclxuICAgfSlcclxuIH0pO1xyXG5cclxuIGlucHV0cy5mb3JFYWNoKCBpbnB1dCA9PiB7XHJcbiAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBmdW5jdGlvbigpIHtcclxuICAgICB0aGlzLnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAncmVhZG9ubHknKTtcclxuICAgfSlcclxuIH0pOyJdLCJmaWxlIjoibWFpbi5qcyJ9
