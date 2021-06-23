import * as types from "./../constants/actionTypes";

var data = JSON.parse(localStorage.getItem("tasks"));
var initialState = data ? data : [];
// Tao chuoi random
var generateString = () => {
  return Math.floor((1 + Math.random()) * 0x1000)
    .toString(16)
    .substring(1);
};
var generateId = () => {
  return generateString() + generateString() + "-" + generateString() + "-" + generateString() + "-" + generateString() + "-";
};
var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ALL:
      return state;
    case types.ADD_TASK:
      // console.log(action)
      var newTask = {
        id: generateId(),
        name: action.task.name,
        status: action.task.status 
      };
      state.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
   

    default:
      return state;
  }
};
export default myReducer;
