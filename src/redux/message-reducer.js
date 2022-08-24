const ACTION = {
    ADD_MESSAGE: 'ADD-MESSAGE',
    UPDATE_NEW_MESSAGE_TEXT: 'UPDATE-NEW-MESSAGE-TEXT'
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

const messageReducer = (state, action) => {
    switch (action.type) {
        case ACTION.ADD_MESSAGE: {
            const newMessage = {
                id: +(new Date()),
                message: state.newMessageText
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        };
        case ACTION.UPDATE_NEW_MESSAGE_TEXT: {
            state.newMessageText = action.newText;
            return state;
        };
        default: {
            return state;
        };
    };
};

export default messageReducer;