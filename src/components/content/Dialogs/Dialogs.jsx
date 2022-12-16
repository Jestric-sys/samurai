import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import but from '../../common/button/Button.module.css';
import { Field, reduxForm } from 'redux-form';

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.sendMessage}>
            <div>
                <Field placeholder='text...' component={'textarea'} name={'message'} className={s.textSendMessage} />
            </div>
            <div>
                <button className={but.button}>Send message</button>
            </div>
        </form>
    );
};

const MessageReduxForm = reduxForm({
    form: 'message'
})(MessageForm);

const Dialogs = (props) => {
    const dialogsElements = props.messagePage.dialogs.map(dialog => <Dialog key={dialog.id} dialog={dialog} />);
    const messageElements = props.messagePage.messages.map(message => <Message key={message.id} message={message} />);
    const onSubmit = (formData) => {
        props.sendMessage(formData.message);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messageElements }
            </div>
            <MessageReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Dialogs;