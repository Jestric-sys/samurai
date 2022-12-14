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
        case ACTION.SET_USER_DATA: return {...state, ...action.data, isAuth: true};
        default: return state;
    };
};

export default authReducer;