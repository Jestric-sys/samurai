import { usersAPI } from "../api/api";

const ACTION = {
    FOLLOW: 'FOLLOW',
    UNFOLLOW: 'UNFOLLOW',
    SET_USERS: 'SET-USERS',
    SET_CURRENT_PAGE: 'SET-CURRENT-PAGE',
    SET_TOTAL_USERS_COUNT: 'SET-TOTAL-USERS-COUNT',
    IS_FETCHING: 'IS-FETCHING',
    IS_FOLLOWING_IN_PROGRESS: 'IS-FOLLOWING-IN-PROGRESS'
};

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

export const follow = (userId) => ({ type: ACTION.FOLLOW, userId });
export const unfollow = (userId) => ({ type: ACTION.UNFOLLOW, userId });
export const setUsers = (users) => ({ type: ACTION.SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: ACTION.SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalCount) => ({ type: ACTION.SET_TOTAL_USERS_COUNT, totalCount });
export const fetching = (isFetching) => ({ type: ACTION.IS_FETCHING, isFetching });
export const following = (isFetching, userId) => ({ type: ACTION.IS_FOLLOWING_IN_PROGRESS, isFetching, userId });

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
        case ACTION.IS_FOLLOWING_IN_PROGRESS: return {
            ...state,
            followingInProgress: action.isFetching
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id != action.userId)
        }
        default: return state;
    };
};

export const getUsersThunkCreator = (currentPage, pageSize) => (dispatch) => {
    dispatch(fetching(true));

    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(fetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        })
        .catch(err => console.log(err));
};

export const unfollowUserThunkCreator = (id) => (dispatch) => {
    usersAPI.unfollowUser(id)
        .then(res => {
            if (res.data.resultCode === 0) dispatch(unfollow(id));
            dispatch(following(false, id));
        })
        .catch(err => console.log(err));
};

export const followUserThunkCreator = (id) => (dispatch) => {
    usersAPI.followUser(id)
        .then(res => {
            if (res.data.resultCode === 0) dispatch(follow(id));
            dispatch(following(false, id));
        })
        .catch(err => console.log(err));
};

export default usersReducer;