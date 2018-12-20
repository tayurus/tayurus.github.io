var headerBurger = document.querySelector('.header__burger');
var headerNav = document.querySelector('.header__nav');
var headerSearch = document.querySelector('.header__search');
var headerSearchInput = document.querySelector('.header__search-input');

headerBurger.onclick = function() {
  headerNav.classList.toggle("d-block");
}

headerSearch.onclick = function() {
  headerSearchInput.classList.toggle("d-block");
}

headerSearchInput.onclick = function(e) {
  e.stopPropagation();
}
