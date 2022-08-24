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
            ]
        }
    },
    _callSubscriber() {
        console.error('Not subscribe');
    },
    _addPost() {
        let newPost = {
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

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; // Наблюдатель
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            this._addPost();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._updateNewPostText(action.newText);
        };
    }
};

window.store = store;

export default store;