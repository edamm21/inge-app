import {
    GET_TODOS,
    GET_TODO,
    DELETE_TODO,
    ADD_TODO,
    COMPLETE_TODO,
    TODOS_LOADING
} from './types';
import axios from 'axios';
import { returnErrors } from './errorActions';

export const getTodos = () => dispatch => {
    dispatch(setTodosLoading());
    axios.get('/api/todos')
        .then(res => dispatch({
            type: GET_TODOS,
            payload: res.data
        }))
        .catch(error => dispatch(returnErrors(error.response.data, error.response.status)));
};

export const getTodo = (id) => dispatch => {
    dispatch(setTodosLoading());
    axios.get('/api/todos/' + id)
        .then(res => dispatch({
            type: GET_TODO,
            payload: res.data
        }))
        .catch(error => dispatch(returnErrors(error.response.data, error.response.status)));
};

export const addTodo = (body) => dispatch => {
    dispatch(setTodosLoading());
    axios.post('/api/todos', body)
        .then(res => dispatch({
            type: ADD_TODO,
            payload: res.data
        }))
        .catch(error => dispatch(returnErrors(error.response.data, error.response.status)));
};

export const deleteTodo = (id) => dispatch => {
    dispatch(setTodosLoading());
    axios.delete('/api/todos/' + id)
        .then(res => dispatch({
            type: DELETE_TODO,
            payload: res.data
        }))
        .catch(error => dispatch(returnErrors(error.response.data, error.response.status)));
};

export const completeTodo = (id) => dispatch => {
    dispatch(setTodosLoading());
    axios.put('/api/todos/' + id)
        .then(res => dispatch({
            type: COMPLETE_TODO,
            payload: res.data
        }))
        .catch(error => dispatch(returnErrors(error.response.data, error.response.status)));
};

export const setTodosLoading = () => {
    return {
        type: TODOS_LOADING
    };
};
