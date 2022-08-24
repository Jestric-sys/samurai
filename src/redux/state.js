const ACTION = {
    ADD_POST: 'ADD-POST',
    UPDATE_NEW_POST_TEXT: 'UPDATE-NEW-POST-TEXT',
    ADD_MESSAGE: 'ADD-MESSAGE',
    UPDATE_NEW_MESSAGE_TEXT: 'UPDATE-NEW-MESSAGE-TEXT'
};

const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, img: 'https://icons-for-free.com/download-icon-avatar-1320568024619304547_512.png', message: 'Hi, how ara you?', like: 15},
                {id: 2, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI3vvVZ-pOGsyhaNEm9s-tm96lh7OGxJrpPQ&usqp=CAU', message: 'My first post', like: 20}
            ],
            dialogs: [
                {id: 1, img: 'https://icons-for-free.com/download-icon-avatar-1320568024619304547_512.png', name: 'Denis'},
                {id: 2, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI3vvVZ-pOGsyhaNEm9s-tm96lh7OGxJrpPQ&usqp=CAU', name: 'Vladimir'},
                {id: 3, img: 'https://icon-library.com/images/avatar-icon-free/avatar-icon-free-15.jpg', name: 'Tommy'}
            ],
            friends: [
                {id: 1, img: 'https://icons-for-free.com/download-icon-avatar-1320568024619304547_512.png', name: 'Denis'},
                {id: 2, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI3vvVZ-pOGsyhaNEm9s-tm96lh7OGxJrpPQ&usqp=CAU', name: 'Vladimir'},
                {id: 3, img: 'https://icon-library.com/images/avatar-icon-free/avatar-icon-free-15.jpg', name: 'Tommy'}
            ],
            newPostText: 'berserk'
        },
        messagePage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hou ara you?'},
                {id: 3, message: 'Welcome new chat'}
            ],
            newMessageText: 'berserk'
        }
    },
    _callSubscriber() {
        console.error('Not subscribe');
    },
    _addPost() {
        const newPost = {
            id: +(new Date()),
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFJ__HxmXSqCktfWMBg3XNM8n9vVkCr5tsQ&usqp=CAU',
            message: this._state.profilePage.newPostText,
            like: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    _sendMessage() {
        const newMessage = {
            id: +(new Date()),
            message: this._state.messagePage.newMessageText
        };
        this._state.messagePage.messages.push(newMessage);
        this._state.messagePage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    _updateNewMessageText(newText) {
        this._state.messagePage.newMessageText = newText;
        this._callSubscriber(this._state);
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; // Наблюдатель
    },

    dispatch(action) {
        switch (action.type) {
            case ACTION.ADD_POST: {
                this._addPost();
                break;
            };
            case ACTION.UPDATE_NEW_POST_TEXT: {
                this._updateNewPostText(action.newText);
                break;
            };
            case ACTION.ADD_MESSAGE: {
                this._sendMessage();
                break;
            };
            case ACTION.UPDATE_NEW_MESSAGE_TEXT: {
                this._updateNewMessageText(action.newText);
                break;
            };
        };
    }
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

export const addMessageActionCreator = () => {
    return {
        type: ACTION.ADD_MESSAGE
    };
};

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: ACTION.UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    };
};

window.store = store;

export default store;