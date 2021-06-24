import * as types from "./../constants/actionTypes";
var id = "";
var index = -1;
var data = JSON.parse(localStorage.getItem("tasks"));
var initialState = data ? data : [];
var findIndex = (tasks, id) => {
  var result = -1;
  tasks.forEach((task, index) => {
    if (task.id === id) {
      result = index;
    }
  });
  return result;
};
// Tao chuoi random
var generateString = () => {
  return Math.floor((1 + Math.random()) * 0x1000)
    .toString(16)
    .substring(1);
};
var generateId = () => {
  return (
    generateString() +
    generateString() +
    "-" +
    generateString() +
    "-" +
    generateString() +
    "-" +
    generateString() +
    "-"
  );
};
var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ALL:
      return state;
    case types.SAVE_TASK:
      var task = {
        id: action.task.id,
        name: action.task.name,
        status: action.task.status
      };
      //THEM TASK
      if (!task.id) {
        task.id = generateId();
        state.push(task);
      } 
      //SUA TASK
      else {
        index = findIndex(state,task.id);
        state[index] = task;
      }
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    case types.UPDATE_TASK_STATUS:
      // console.log(action);
      id = action.id;
      index = findIndex(state, id);
      // console.log(state);
      //cach '1'
      // state[index] = {
      //   ...state[index],
      //   status: !state[index].status,
      // };
      state[index].status = !state[index].status; //cach '2'
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    case types.DELETE_TASK:
      id = action.id;
      index = findIndex(state, id);
      state.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
};
export default myReducer;
