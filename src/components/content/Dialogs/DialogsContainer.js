import React from 'react';
import Dialogs from './Dialogs';
import { addMessage, updateNewMessageText, setMessages, setDialogs } from '../../../redux/message-reducer';
import { setAuthUser } from '../../../redux/auth-reducer';
import { connect } from 'react-redux';
import * as axios from 'axios';

class DialogsAPIComponent extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then(res => {
                res.data.resultCode === 1
                ? this.props.setAuthUser(null, null, null)
                : this.props.setAuthUser(res.data.data.id, res.data.data.email, res.data.data.login);
            })
            .catch(err => console.log(err));
        this.props.setDialogs([
            {id: 1, img: 'https://icons-for-free.com/download-icon-avatar-1320568024619304547_512.png', name: 'Denis'},
            {id: 2, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI3vvVZ-pOGsyhaNEm9s-tm96lh7OGxJrpPQ&usqp=CAU', name: 'Vladimir'},
            {id: 3, img: 'https://icon-library.com/images/avatar-icon-free/avatar-icon-free-15.jpg', name: 'Tommy'}
        ]);
        this.props.setMessages([
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hou ara you?'},
            {id: 3, message: 'Welcome new chat'}
        ]);
    };

    sendMessage = () => this.props.addMessage();
    onChangeMessage = (text) => this.props.updateNewMessageText(text);

    render() {
        return this.props.auth.isAuth && this.props.auth.login !== null
        ? <Dialogs 
            messagePage={this.props.messagePage}
            onChangeMessage={this.onChangeMessage}
            sendMessage={this.sendMessage}
        />
        : <div>Вы не автаризованы</div>
    };
};

const mapStateToProps = (state) => ({ messagePage: state.messagePage, auth: state.auth });
const dispatch = {
    addMessage,
    updateNewMessageText,
    setMessages,
    setDialogs,
    setAuthUser
};

const DialogsContainer = connect(mapStateToProps, dispatch)(DialogsAPIComponent);

export default DialogsContainer;