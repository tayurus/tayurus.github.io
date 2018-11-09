//тут хранится состояние трех переключателей
let state = { cheap: false, quality: false, fast: false };

//это обработчик на изменение значения любого из переключателей
function updateState(e) {
  //запоминаем атрибут name измененного переключателя
  const lastChanged = e.target.name;

  //обновляем состояние массива в соответсnвии с измененным переключателем
  state[lastChanged] = e.target.checked;

  //считаем сумму значений всех переключателей
  const summ = Object.keys(state).reduce((acc, key) => acc + state[key], 0);

  //если сумма равна 3
  if (summ === 3) {
    //находим следующий за измененным переключатель
    //в виде числа
    const afterLastChangedIndex =
      Object.keys(state).findIndex(item => item === lastChanged) + 1;

    //в виде ключа
    const afterLastChangedKey = Object.keys(state).filter(
      (item, index) => index === afterLastChangedIndex % 3
    )[0];

    //выключаем следующий за измененным переключателель
    document.querySelector(
      "[name=" + afterLastChangedKey + "]"
    ).checked = false;

    //то же самое делаем в состоянии
    state[afterLastChangedKey] = false;
  }
}

//вешаем обработчик
var switchers = document.getElementsByClassName("switcher-checkbox");
Array.from(switchers).forEach(function(element) {
  element.addEventListener("change", updateState);
});
