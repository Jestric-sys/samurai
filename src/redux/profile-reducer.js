// Словарик для action
const ACTION = {
    ADD_POST: 'ADD-POST',
    UPDATE_NEW_POST_TEXT: 'UPDATE-NEW-POST-TEXT'  
};

// Заглушка БД
const initialState = {
    posts: [
        {id: 1, img: 'https://icons-for-free.com/download-icon-avatar-1320568024619304547_512.png', message: 'Hi, how ara you?', like: 15},
        {id: 2, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI3vvVZ-pOGsyhaNEm9s-tm96lh7OGxJrpPQ&usqp=CAU', message: 'My first post', like: 20}
    ],
    newPostText: 'berserk'
};

// Action для контейнера для добавления поста
export const addPostActionCreator = () => {
    return {
        type: ACTION.ADD_POST
    };
};

// Action для обновления текста в textarea
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: ACTION.UPDATE_NEW_POST_TEXT,
        newText: text
    };
};

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
            const stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        };
        case ACTION.UPDATE_NEW_POST_TEXT: {
            const stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        };
        default: {
            return state;
        }
    };
};

export default profileReducer;