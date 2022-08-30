const ACTION = {
    FOLLOW: 'FOLLOW',
    UNFOLLOW: 'UNFOLLOW',
    SET_USERS: 'SET-USERS',
    SET_CURRENT_PAGE: 'SET-CURRENT-PAGE',
    SET_TOTAL_USERS_COUNT: 'SET-TOTAL-USERS-COUNT',
    IS_FETCHING: 'IS-FETCHING',
    SET_USER_PROFILE: 'SET-USER-PROFILE'
};

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
};

export const follow = (userId) => ({ type: ACTION.FOLLOW, userId });
export const unfollow = (userId) => ({ type: ACTION.UNFOLLOW, userId });
export const setUsers = (users) => ({ type: ACTION.SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: ACTION.SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalCount) => ({ type: ACTION.SET_TOTAL_USERS_COUNT, totalCount });
export const fetching = (isFetching) => ({ type: ACTION.IS_FETCHING, isFetching });
export const setUserProfile = (user) => ({ type: ACTION.SET_USER_PROFILE, user });

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.FOLLOW: return {
            ...state,
            users: state.users.map(u => {
                if (u.id === action.userId) {
                    return {...u, followed: true};
                };
                return u;
            })
        };
        case ACTION.UNFOLLOW: return {
            ...state,
            users: state.users.map(u => {
                if (u.id === action.userId) {
                    return {...u, followed: false};
                };
                return u;
            })
        };
        case ACTION.SET_USERS: return { ...state, users: action.users };
        case ACTION.SET_CURRENT_PAGE: return { ...state, currentPage: action.currentPage };
        case ACTION.SET_TOTAL_USERS_COUNT: return { ...state, totalUsersCount: action.totalCount };
        case ACTION.IS_FETCHING: return { ...state, isFetching: action.isFetching };
        case ACTION.SET_USER_PROFILE: return { ...state, user: action.user };
        default: return state;
    };
};

export default usersReducer;