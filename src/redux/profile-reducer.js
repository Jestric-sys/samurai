const ACTION = {
    ADD_POST: 'ADD-POST',
    UPDATE_NEW_POST_TEXT: 'UPDATE-NEW-POST-TEXT'  
};

export const addPostActionCreator = () => {
    return {
        type: ACTION.ADD_POST
    };
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: ACTION.UPDATE_NEW_POST_TEXT,
        newText: text
    };
};

const profileReducer = (state, action) => {
    switch (action.type) {
        case ACTION.ADD_POST: {
            const newPost = {
                id: +(new Date()),
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFJ__HxmXSqCktfWMBg3XNM8n9vVkCr5tsQ&usqp=CAU',
                message: state.newPostText,
                like: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        };
        case ACTION.UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newText;
            return state;
        };
        default: {
            return state;
        };
    };
};

export default profileReducer;