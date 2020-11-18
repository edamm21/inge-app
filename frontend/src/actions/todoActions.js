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
    axios.get('http://localhost:8080/api/todos')
        .then(res => dispatch({
            type: GET_TODOS,
            payload: res.data
        }));
    /*dispatch({
        type: GET_TODOS,
        payload: [
            {
                id: 1,
                title: 'Título 1',
                description: 'desc1',
                done: false,
                deadline: '18/11/2020'
            },
            {
                id: 2,
                title: 'Título 2',
                description: 'desc2',
                done: true,
                deadline: '19/11/2020'
            }
        ]
    });*/
        //.catch(error => dispatch(returnErrors(error.response.data, error.response.status)));
};

export const getTodo = (id) => dispatch => {
    dispatch(setTodosLoading());
    axios.get('http://localhost:8080/api/todos/' + id)
        .then(res => dispatch({
            type: GET_TODO,
            payload: res.data
        }))
        //.catch(error => dispatch(returnErrors(error.response.data, error.response.status)));
};

export const addTodo = (body) => dispatch => {
    dispatch(setTodosLoading());
    axios.post('http://localhost:8080/api/todos', body)
        .then(res => dispatch({
            type: ADD_TODO,
            payload: res.data
        }))
        //.catch(error => dispatch(returnErrors(error.response.data, error.response.status)));
};

export const deleteTodo = (id) => dispatch => {
    dispatch(setTodosLoading());
    axios.delete('http://localhost:8080/api/todos/' + id)
        .then(res => dispatch({
            type: DELETE_TODO,
            payload: res.data
        }))
        //.catch(error => dispatch(returnErrors(error.response.data, error.response.status)));
};

export const completeTodo = (id) => dispatch => {
    dispatch(setTodosLoading());
    axios.put('http://localhost:8080/api/todos/' + id)
        .then(res => dispatch({
            type: COMPLETE_TODO,
            payload: res.data
        }))
        //.catch(error => dispatch(returnErrors(error.response.data, error.response.status)));
};

export const setTodosLoading = () => {
    return {
        type: TODOS_LOADING
    };
};
