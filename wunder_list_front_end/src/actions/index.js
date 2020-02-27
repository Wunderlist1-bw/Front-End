import axiosWithAuth from '../utils/axiosWithAuth';

export const GET_LIST = "GET_LIST";

export const getList = () => dispatch => {
    dispatch({ type: GET_LIST });

    axiosWithAuth()
        .get(``)
        .then(res => console.log(res))
        .catch(err => console.log(err))
}