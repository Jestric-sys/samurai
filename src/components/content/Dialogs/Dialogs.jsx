import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {
    const message = React.createRef();
    const onChangeMessage = () => {
        const text = message.current.value;
        props.updateMessageText(text);
    };
    const sendMessage = () => {
        props.sendMessage();
    };
    const dialogsElements = props.messagePage.dialogs.map(dialog => <Dialog key={dialog.id} dialog={dialog} />);
    const messageElements = props.messagePage.messages.map(message => <Message key={message.id} message={message} />);
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
                    <textarea onChange={onChangeMessage}  ref={message} className={s.textSendMessage} value={props.messagePage.newMessageText}></textarea>
                </div>
                <div>
                    <button onClick={sendMessage} className={s.button}>Send message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;