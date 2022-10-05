import React from 'react';
import Settings from './Settings';
import { setAuthUser } from '../../../redux/auth-reducer';
import { connect } from 'react-redux';
import * as axios from 'axios';

class SettingsAPIComponent extends React.Component {
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
    };

    render() {
        return this.props.auth.isAuth && this.props.auth.login !== null
        ? <Settings />
        : <div>Вы не автаризованы</div>
    };
};

const mapStateToProps = (state) => ({auth: state.auth});
const dispatch = { setAuthUser };

const SettingsContainer = connect(mapStateToProps, dispatch)(SettingsAPIComponent);

export default SettingsContainer;