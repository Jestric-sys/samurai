// Словарик для action
const ACTION = {
    ADD_POST: 'ADD-POST',
    UPDATE_NEW_POST_TEXT: 'UPDATE-NEW-POST-TEXT',
    SET_POSTS: 'SET-POSTS'
};

// Заглушка БД
const initialState = {
    posts: [],
    newPostText: 'berserk'
};

// Action для контейнера для добавления поста
export const addPostActionCreator = () => ({type: ACTION.ADD_POST});

// Action для обновления текста в textarea
export const updateNewPostTextActionCreator = (newText) => ({type: ACTION.UPDATE_NEW_POST_TEXT, newText});

export const setPostsAC = (posts) => ({type: ACTION.SET_POSTS, posts});

// Reducer для постов
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
        case ACTION.UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        };
        case ACTION.SET_POSTS: {
            return {
                ...state,
                posts: [...action.posts]
            };
        };
        default: {
            return state;
        };
    };
};

export default profileReducer;