import { usersAPI, profileAPI } from "../api/api";

const ACTION = {
    ADD_POST: 'ADD-POST',
    SET_POSTS: 'SET-POSTS',
    SET_USER_PROFILE: 'SET-USER-PROFILE',
    SET_STATUS: 'SET_STATUS'
};

const initialState = {
    posts: [],
    profile: null,
    status: ''
};

export const addPost = (message) => ({type: ACTION.ADD_POST, message});
export const setPosts = (posts) => ({type: ACTION.SET_POSTS, posts});
export const setUserProfile = (profile) => ({type: ACTION.SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: ACTION.SET_STATUS, status});

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ACTION.ADD_POST: {
            const newPost = {
                id: +(new Date()),
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFJ__HxmXSqCktfWMBg3XNM8n9vVkCr5tsQ&usqp=CAU',
                message: action.message,
                like: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        };
        case ACTION.SET_POSTS: return { ...state, posts: [...action.posts] };
        case ACTION.SET_USER_PROFILE: return { ...state, profile: action.profile };
        case ACTION.SET_STATUS: return { ...state, status: action.status };
        default: return state;
    };
};

export const getUserProfileThunkCreate = (userID) => (dispatch) => {
    usersAPI.profileUserID(userID)
        .then(data => {
            dispatch(setUserProfile(data));
        })
        .catch(err => console.log(err));
};

export const getStatusProfileThunkCreate = (userID) => (dispatch) => {
    profileAPI.getStatus(userID)
        .then(data => {
            dispatch(setUserStatus(data));
        })
        .catch(err => console.log(err));
};

export const putStatusProfileThunkCreate = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setUserStatus(status));
            };
        });
};

export default profileReducer;