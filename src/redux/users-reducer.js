const ACTION = {
    FOLLOW: 'FOLLOW',
    UNFOLLOW: 'UNFOLLOW',
    SET_USERS: 'SET-USERS'
};

// Заглушка БД
const initialState = {
    users: []
};

export const followAC = (userId) => ({ type: ACTION.FOLLOW, userId });

export const unfollowAC = (userId) => ({ type: ACTION.UNFOLLOW, userId });

export const setUsersAC = (users) => ({ type: ACTION.SET_USERS, users });

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.FOLLOW: {
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    };
                    return u;
                })
            };
        };
        case ACTION.UNFOLLOW: {
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    };
                    return u;
                })
            }
        };
        case ACTION.SET_USERS: {
            return { ...state, users: action.users };
        };
        default: {
            return state
        };
    };
};

export default usersReducer;