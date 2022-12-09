const ACTION = {
    ADD_POST: 'ADD-POST',
    UPDATE_NEW_POST_TEXT: 'UPDATE-NEW-POST-TEXT',
    SET_POSTS: 'SET-POSTS',
    SET_USER_PROFILE: 'SET-USER-PROFILE'
};

const initialState = {
    posts: [],
    newPostText: 'berserk',
    profile: null
};

export const addPost = () => ({type: ACTION.ADD_POST});
export const updateNewPostText = (newText) => ({type: ACTION.UPDATE_NEW_POST_TEXT, newText});
export const setPosts = (posts) => ({type: ACTION.SET_POSTS, posts});
export const setUserProfile = (profile) => ({type: ACTION.SET_USER_PROFILE, profile});

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ACTION.ADD_POST: {
            const newPost = {
                id: +(new Date()),
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFJ__HxmXSqCktfWMBg3XNM8n9vVkCr5tsQ&usqp=CAU',
                message: state.newPostText,
                like: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        };
        case ACTION.UPDATE_NEW_POST_TEXT: return { ...state, newPostText: action.newText };
        case ACTION.SET_POSTS: return { ...state, posts: [...action.posts] };
        case ACTION.SET_USER_PROFILE: return { ...state, profile: action.profile };
        default: return state;
    };
};

export default profileReducer;