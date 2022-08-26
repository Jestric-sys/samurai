// Словарик для action
const ACTION = {
    ADD_MESSAGE: 'ADD-MESSAGE',
    UPDATE_NEW_MESSAGE_TEXT: 'UPDATE-NEW-MESSAGE-TEXT',
    SET_MESSAGES: 'SET-MESSAGES',
    SET_DIALOGS: 'SET-DIALOGS'
};

// Заглушка БД
const initialState = {
    messages: [],
    dialogs: [],
    newMessageText: 'berserk'
};

// Action для контейнера для отправки сообщения
export const addMessageActionCreator = () => ({type: ACTION.ADD_MESSAGE});

// Action для обновления текста в textarea
export const updateNewMessageTextActionCreator = (newText) => ({type: ACTION.UPDATE_NEW_MESSAGE_TEXT, newText});

export const setMessagesAC = (messages) => ({type: ACTION.SET_MESSAGES, messages});

export const setDialogsAC = (dialogs) => ({type: ACTION.SET_DIALOGS, dialogs});

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
        case ACTION.SET_MESSAGES: {
            return {
                ...state,
                messages: [...action.messages]
            };
        };
        case ACTION.SET_DIALOGS: {
            return {
                ...state,
                dialogs: [...action.dialogs]
            };
        };
        default: {
            return state;
        };
    };
};

export default messageReducer;