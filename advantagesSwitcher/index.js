//ACTIONS
const changeSwitcherValue = e => ({
  type: "changeSwitcherValue",
  switchName: e.target.name,
  switchValue: e.target.checked
});

//REDUCERS
const initialState = { cheap: false, quality: false, fast: false };
const switchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "changeSwitcherValue":
      let newState = Object.assign({}, state);
      //обновить значениe switch
      newState[action.switchName] = action.switchValue;
      //подсчитать сумму
      const summ = Object.keys(newState).reduce(
        (acc, key) => acc + newState[key],
        0
      );
      if (summ === 3) {
        //выключить switch, идущий сразу за измененным
        const keys = Object.keys(newState);
        const afterLastChangedKey =
          keys[(keys.findIndex(key => key === action.switchName) + 1) % 3];
        newState[afterLastChangedKey] = false;
      }

      return newState;

    default:
      return state;
  }
};

//STORE
let store = Redux.createStore(switchReducer);
store.subscribe(render);

function render() {
  const state = store.getState();
  Object.keys(state).forEach(
    key => (document.querySelector("[name=" + key + "]").checked = state[key])
  );
  console.log("STORE = ", store.getState());
}

//вешаем обработчик
var switchers = document.getElementsByClassName("switcher-checkbox");
Array.from(switchers).forEach(function(e) {
  e.addEventListener("change", e => store.dispatch(changeSwitcherValue(e)));
});
