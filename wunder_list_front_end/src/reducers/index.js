import {
    GET_LIST, LOAD_LIST, LIST_ERROR,
    ADD_TODO, TODO_ADDED, ADD_ERROR,
    EDIT_TODO, TODO_EDITED, EDIT_ERROR,
    DELETE_TODO, TODO_DELETED, DELETE_ERROR
} from '../actions';

const initialState = {
    isLoading: false,
    task: [
        {
            id: Date.now(),
            category: 'home',
            title: 'sample data',
            description: 'sample description here',
            completeDate: 'SOON',
            complete: 0
        }
    ],
    error: ''
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_LIST:
            return {
                ...state,
                isLoading: true,

            }
        case LOAD_LIST:
            return {
                ...state,
                isLoading: false,
                task: action.payload
            }
        case LIST_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        case ADD_TODO:
            return {
                ...state,
                isLoading: true,

            }
        case TODO_ADDED:
            return {
                ...state,
                isLoading: false,

            }
        case ADD_ERROR:
            return {
                ...state,
                isLoading: false,

            }

        case EDIT_TODO:
            return {
                ...state,
                isLoading: true,

            }
        case TODO_EDITED:
            return {
                ...state,
                isLoading: false,

            }
        case EDIT_ERROR:
            return {
                ...state,
                isLoading: false,

            }

        case DELETE_TODO:
            return {
                ...state,
                isLoading: true,

            }
        case TODO_DELETED:
            return {
                ...state,
                isLoading: false,

            }
        case DELETE_ERROR:
            return {
                ...state,
                isLoading: false,

            }

        default:
            return state;
    }
}