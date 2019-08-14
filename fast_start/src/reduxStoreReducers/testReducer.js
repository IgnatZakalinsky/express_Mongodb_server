import {testAPI} from "../axiosAPI/testAPI.js";

const SOME_CONST = 'SOME_CONST';

const initialState = {
    someArr: [
        {id: 1, message: 'post1'},
        {id: 2, message: 'post2'}
    ],
    someText: 'Nya!'
};

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case SOME_CONST:
            let newPost = state.someText; //…= action.newText;
            return {
                ...state,
                someArr: [...state.someArr, {id: 5, message: newPost}],
                someText: 'x',
            };
        default:
            return state;
    }
};

//ActionCreators
export const addNewPost = (text) => ({type: SOME_CONST, newText: text});

//ThunkCreators
export const getSomeText = (userId) => (dispatch) => {
    testAPI.getSomeTextFromServer(userId).then(response => {
        dispatch(addNewPost(response.data.fullName));
    });
};

export default testReducer;
