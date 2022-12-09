import { authAPI } from '../api/api';

const ACTION = {
    SET_USER_DATA: 'SET-USER-DATA'
};

const initialState = {
    userID: null,
    email: null,
    login: null,
    isAuth: false
};

export const setAuthUser = (userID, email, login) => ({ type: ACTION.SET_USER_DATA, data: {userID, email, login} });

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.SET_USER_DATA: return action.data.login ?  {...state, ...action.data, isAuth: true} : {...state};
        default: return state;
    };
};

export const getAuthUserThunkCreator = () => (dispatch) => {
    authAPI.me()
        .then(data => {
            data.resultCode === 1
                ? dispatch(setAuthUser(null, null, null))
                : dispatch(setAuthUser(data.data.id, data.data.email, data.data.login));
        })
        .catch(err => console.log(err));
};

export default authReducer;