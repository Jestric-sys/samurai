import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../redux/message-reducer';

const Dialogs = (props) => {
    const message = React.createRef();
    const onChangeMessage = () => {
        const text = message.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    };
    const sendMessage = () => {
        props.dispatch(addMessageActionCreator());
    };
    const dialogsElements = props.state.profilePage.dialogs.map(dialog => <Dialog key={dialog.id} state={dialog} />);
    const messageElements = props.state.messagePage.messages.map(message => <Message key={message.id} state={message} />);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messageElements }
            </div>
            <div className={s.sendMessage}>
                <div>
                    <textarea onChange={onChangeMessage}  ref={message} className={s.textSendMessage} value={props.state.messagePage.newMessageText}></textarea>
                </div>
                <div>
                    <button onClick={sendMessage} className={s.button}>Send message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;