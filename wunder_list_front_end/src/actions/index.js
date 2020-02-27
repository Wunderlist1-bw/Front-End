import axiosWithAuth from '../utils/axiosWithAuth';

export const GET_LIST = "GET_LIST";
export const LOAD_LIST = "LOAD_LIST";
export const LIST_ERROR = "LIST_ERROR";

export const ADD_TODO = "ADD_TODO";
export const TODO_ADDED = "TODO_ADDED";
export const ADD_ERROR = "ADD_ERROR";


export const getList = () => dispatch => {
    dispatch({ type: GET_LIST });

    axiosWithAuth()
        .get(``)
        .then(res => {
            console.log(res);
            dispatch({ type: LOAD_LIST, payload: res.data })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: LIST_ERROR, payload: "NO LIST FOR YOU" })
        })
}

export const addTodo = () => dispatch => {
    dispatch({ type: ADD_TODO });

    axiosWithAuth()
        .post(``, {})
        .then(res => {
            console.log('todo added?', res.data);
            dispatch({ type: TODO_ADDED, payload: res.data })
        })
        .catch(res => {
            console.log('todo did not add :(');
            dispatch({ type: ADD_ERROR, payload: "COULD NOT ADD YOUR TODO ITEM" })
        })
}