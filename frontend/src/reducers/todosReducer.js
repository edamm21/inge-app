import {
    GET_TODO,
    GET_TODOS,
    ADD_TODO,
    DELETE_TODO,
    COMPLETE_TODO,
    TODOS_LOADING
} from '../actions/types';

const initialState = {
    todos: null,
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_TODO:
        case GET_TODOS:
            return {
                ...state,
                todos: state.todos ? [...state.todos, ...action.payload] : action.payload,
                loading: false
            };
        case ADD_TODO:
            return {
                ...state,
                todos: [action.payload, ...state.todos]
            };
        case COMPLETE_TODO:
            let { todos } = state;
            let updatedTodo = action.payload;
            let index = -1;
            for(let i = 0 ; i < todos.length && index < 0 ; i++) {
                if(todos[i].id === updatedTodo.id)
                    index = i;
            }
            todos[index] = updatedTodo;
            return {
                ...state,
                todos: todos,
                loading: false
            };
        case TODOS_LOADING:
            return {
                ...state,
                loading: true
            };
        case DELETE_TODO:
            return {
                ...state,
                loading: false
            };
        default:
            return state
    }
}
