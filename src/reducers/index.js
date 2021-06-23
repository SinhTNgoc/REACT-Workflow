import { combineReducers } from "redux";
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import editTask from './editTask';

const myReducer = combineReducers({
    tasks: tasks,
    isDisplayForm: isDisplayForm,
    editTask: editTask
});

export default myReducer;