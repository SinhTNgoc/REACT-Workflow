import * as types from "./../constants/actionTypes";

export const listAll = () => {
  return {
    type: types.LIST_ALL,
  };
};
export const addTask = (task) => {
  return {
    type: types.ADD_TASK,
    task: task, //task.name,task.status
  };
};
export const toggleForm = () => {
  return { type: types.TOGGLE_FORM };
};
export const closeForm = () => {
  return { type: types.CLOSE_FORM };
};
export const openForm = () => {
  return { type: types.OPEN_FORM };
};
export const updateStatusTask = (id) => {
  return {
    type: types.UPDATE_TASK_STATUS,
    id: id,
  };
};
