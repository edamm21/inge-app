import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import todosReducer from './todosReducer';

export default combineReducers({
    error: errorReducer,
    todos: todosReducer
})