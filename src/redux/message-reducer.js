// Словарик для action
const ACTION = {
    ADD_MESSAGE: 'ADD-MESSAGE',
    UPDATE_NEW_MESSAGE_TEXT: 'UPDATE-NEW-MESSAGE-TEXT'
};

// Заглушка БД
const initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hou ara you?'},
        {id: 3, message: 'Welcome new chat'}
    ],
    dialogs: [
        {id: 1, img: 'https://icons-for-free.com/download-icon-avatar-1320568024619304547_512.png', name: 'Denis'},
        {id: 2, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI3vvVZ-pOGsyhaNEm9s-tm96lh7OGxJrpPQ&usqp=CAU', name: 'Vladimir'},
        {id: 3, img: 'https://icon-library.com/images/avatar-icon-free/avatar-icon-free-15.jpg', name: 'Tommy'}
    ],
    newMessageText: 'berserk'
};

// Action для контейнера для отправки сообщения
export const addMessageActionCreator = () => {
    return {
        type: ACTION.ADD_MESSAGE
    };
};

// Action для обновления текста в textarea
export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: ACTION.UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    };
};

// Reducer для мессенджера
const messageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ACTION.ADD_MESSAGE: {
            const newMessage = {
                id: +(new Date()),
                message: state.newMessageText
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            };
        };
        case ACTION.UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText
            };
        };
        default: {
            return state;
        };
    };
};

export default messageReducer;