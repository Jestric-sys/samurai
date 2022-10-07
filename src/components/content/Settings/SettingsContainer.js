import React from 'react';
import Settings from './Settings';
import { getAuthUserThunkCreator } from '../../../redux/auth-reducer';
import { connect } from 'react-redux';

class SettingsAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getAuthUserThunkCreator();
    };

    render() {
        return this.props.auth.isAuth && this.props.auth.login !== null
        ? <Settings />
        : <div>Вы не автаризованы</div>
    };
};

const mapStateToProps = (state) => ({auth: state.auth});
const dispatch = { getAuthUserThunkCreator };

const SettingsContainer = connect(mapStateToProps, dispatch)(SettingsAPIComponent);

export default SettingsContainer;