import React from 'react';
import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../redux/message-reducer';

const DialogsContainer = (props) => {
    const state = props.store.getState();
    const sendMessage = () => {
        const action = addMessageActionCreator();
        props.store.dispatch(action);
    };
    const updateMessageText = (text) => {
        const action = updateNewMessageTextActionCreator(text);
        props.store.dispatch(action);
    };
    return (
        <Dialogs
            messagePage={state.messagePage}
            sendMessage={sendMessage}
            updateMessageText={updateMessageText}
        />
    );
};

export default DialogsContainer;