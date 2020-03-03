import axiosWithAuth from '../utils/axiosWithAuth';

export const GET_LIST = "GET_LIST";
export const LOAD_LIST = "LOAD_LIST";
export const LIST_ERROR = "LIST_ERROR";

export const ADD_TODO = "ADD_TODO";
export const TODO_ADDED = "TODO_ADDED";
export const ADD_ERROR = "ADD_ERROR";

export const EDIT_TODO = "EDIT_TODO";
export const TODO_EDITED = "TODO_EDITED";
export const EDIT_ERROR = "EDIT_ERROR";

export const DELETE_TODO = "DELETE_TODO";
export const TODO_DELETED = "TODO_DELETED";
export const DELETE_ERROR = "DELETE_ERROR";



export const getList = () => dispatch => {
    dispatch({ type: GET_LIST });

    axiosWithAuth()
        .get(`/api/task`)
        .then(res => {
            console.log(res);
            dispatch({ type: LOAD_LIST, payload: res.data })
        })
        .catch(err => {
            console.log('could not get list', err);
            dispatch({ type: LIST_ERROR, payload: "NO LIST FOR YOU" })
        })
}

export const addTodo = (formData) => dispatch => {
    dispatch({ type: ADD_TODO });

    axiosWithAuth()
        .post(`/api/task`, { formData })
        .then(res => {
            console.log('todo added?', res.data);
            // dispatch({ type: TODO_ADDED, payload: res.data })
        })
        .catch(err => {
            console.log('todo did not add', err);
            // dispatch({ type: ADD_ERROR, payload: "COULD NOT ADD YOUR TODO ITEM" })
        })
}

export const editTodo = () => dispatch => {
    dispatch({ type: EDIT_TODO });

    axiosWithAuth()
        .put(``, {})
        .then(res => {
            console.log('todo edited?', res.data);
            dispatch({ type: TODO_EDITED, payload: res.data })
        })
        .catch(err => {
            console.log('could not edit todo', err);
            dispatch({ EDIT_ERROR, payload: "UNABLE TO EDIT YOUR TODO, YOU BETTER GO GET IT DONE" })

        })
}

export const deleteTodo = () => dispatch => {
    dispatch({ type: DELETE_TODO });

    axiosWithAuth()
        .post(``)
        .then(res => {
            console.log('todo go bye bye?', res.data);
            dispatch({ type: TODO_DELETED, payload: res.data })
        })
        .catch(res => {
            console.log('todo could not be deleted');
            dispatch({ type: DELETE_ERROR, payload: "YOU ARE STUCK WITH THIS TODO" })
        })
}