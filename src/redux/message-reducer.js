const ACTION = {
    ADD_MESSAGE: 'ADD-MESSAGE',
    SET_MESSAGES: 'SET-MESSAGES',
    SET_DIALOGS: 'SET-DIALOGS'
};

const initialState = {
    messages: [],
    dialogs: []
};

export const addMessage = (message) => ({type: ACTION.ADD_MESSAGE, message});
export const setMessages = (messages) => ({type: ACTION.SET_MESSAGES, messages});
export const setDialogs = (dialogs) => ({type: ACTION.SET_DIALOGS, dialogs});

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.ADD_MESSAGE: {
            const newMessage = {
                id: +(new Date()),
                message: action.message
            };
            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
        };
        case ACTION.SET_MESSAGES: return { ...state, messages: [...action.messages] };
        case ACTION.SET_DIALOGS: return { ...state, dialogs: [...action.dialogs] };
        default: return state;
    };
};

export default messageReducer;