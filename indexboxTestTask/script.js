//ПОЛУЧАЕМ UNITS
fetch("./units.json").then(data => data.json()).then( units => {

  units.forEach( unit => {
    const select = document.querySelector('[data-name="' + unit.name + '"]');
    Object.keys(unit.json).forEach( (unitName, index)  => {
      const option = document.createElement("option");
      option.innerHTML = unitName;
      option.value = unit.json[unitName];
      select.options[index] = new Option(unitName, unit.json[unitName]);
    })
  })
})

function fillDataList(jsonUrl, datalistId, fieldName){
  fetch(jsonUrl).then(data => data.json()).then( data => {
    const datalist = document.querySelector('datalist#' + datalistId );
    let options = "";
    data.forEach( option => {
      options = options + '<option value="'+option[fieldName]+'"/>';
    });

    datalist.innerHTML = options;
  })
}

//ПОЛУЧАЕМ PRODUCTS
fillDataList('products.json', 'product', 'name');

//ПОЛУЧАЕМ countries
fillDataList('countries.json', 'country', 'name');

//ПОЛУЧАЕМ countries
fillDataList('factors.json', 'factor', 'factor');

//ПОЛУЧАЕМ periods
fillDataList('periods.json', 'period', 'year');

$(document).ready(function(){
  $('.header__hamburger').click(function(){
    $(".header__wrapper-nav").toggleClass('hidden')
  })
})
