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

    return axiosWithAuth()
        .get(`/api/task`)
        .then(res => {
            dispatch({ type: LOAD_LIST, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: LIST_ERROR, payload: "NO LIST FOR YOU" })
        })
}

export const addTodo = (formData) => dispatch => {
    dispatch({ type: ADD_TODO });

    return axiosWithAuth()
        .post(`/api/task`, formData)
        .then(res => {
            console.log('todo added?', res.data);
            dispatch({ type: TODO_ADDED })
        })
        .catch(err => {
            console.log('todo did not add', err);
            dispatch({ type: ADD_ERROR, payload: "COULD NOT ADD YOUR TODO ITEM" })
        })
}
//need to pass in correct data, might want to edit elsewhere, then pass in editData instead of todoID
export const editTodo = (editData) => dispatch => {
    dispatch({ type: EDIT_TODO });

    return axiosWithAuth()
        .put(`/api/task/${editData.id}`, { editData })
        .then(res => {
            console.log('todo edited?', res.data);
            // dispatch({ type: TODO_EDITED, payload: res.data })
        })
        .catch(err => {
            console.log('could not edit todo', err);
            // dispatch({ EDIT_ERROR, payload: "UNABLE TO EDIT YOUR TODO, YOU BETTER GO GET IT DONE" })

        })
}


// const saveEdit = e => {
//     e.preventDefault();
//     // Make a put request to save your updated color
//     // think about where will you get the id from...
//     // where is is saved right now?
//     setTimeout(() => {
//         axiosWithAuth()
//             .put(`/colors/${colorToEdit.id}`, colorToEdit)
//             .then(res => {
//                 console.log('did the color edit', res.data);
//             })
//             .catch(err => {
//                 console.log('colors did not update', err)
//             })
//     }, 100)
// }




export const deleteTodo = (todo) => dispatch => {
    dispatch({ type: DELETE_TODO });

    return axiosWithAuth()
        .delete(`/api/task/${todo.id}`)
        .then(res => {
            console.log('todo go bye bye?', res);
            dispatch({ type: TODO_DELETED })
        })
        .catch(res => {
            console.log('todo could not be deleted');
            dispatch({ type: DELETE_ERROR, payload: "YOU ARE STUCK WITH THIS TODO" })
        })
}



// const deleteColor = color => {
//     // make a delete request to delete this color
//     axiosWithAuth()
//       .delete(`/colors/${color.id}`)
//       .then(res => console.log('delete worked', res))
//       .catch(err => console.log('delete did not work', err))
//   };