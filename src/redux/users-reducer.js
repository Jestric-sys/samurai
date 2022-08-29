const ACTION = {
    FOLLOW: 'FOLLOW',
    UNFOLLOW: 'UNFOLLOW',
    SET_USERS: 'SET-USERS',
    SET_CURRENT_PAGE: 'SET-CURRENT-PAGE',
    SET_TOTAL_USERS_COUNT: 'SET-TOTAL-USERS-COUNT',
    IS_FETCHING: 'IS-FETCHING'
};

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
};

export const followAC = (userId) => ({ type: ACTION.FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: ACTION.UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: ACTION.SET_USERS, users });
export const setCurrentPageAC = (currentPage) => ({ type: ACTION.SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCountAC = (totalCount) => ({ type: ACTION.SET_TOTAL_USERS_COUNT, totalCount });
export const isFetchingAC = (isFetching) => ({ type: ACTION.IS_FETCHING, isFetching });

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
        default: return state;
    };
};

export default usersReducer;