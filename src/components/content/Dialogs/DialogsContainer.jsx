import React from 'react';
import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../redux/message-reducer';
import StoreContext from '../../../StoreContext';

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState().messagePage;
                const sendMessage = () => {
                    const action = addMessageActionCreator();
                    store.dispatch(action);
                };
                const updateMessageText = (text) => {
                    const action = updateNewMessageTextActionCreator(text);
                    store.dispatch(action);
                };
                return <Dialogs 
                            messagePage={state}
                            sendMessage={sendMessage}
                            updateMessageText={updateMessageText}
                        />
            }}
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;