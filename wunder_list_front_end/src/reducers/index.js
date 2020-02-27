import { } from '../actions';

const initialState = {
    isLoading: false,
    list: [
        {
            title: '',
            text_area: '',
            created_date: Date.now(),
            due_date: '',
            status: false
        }
    ]
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}