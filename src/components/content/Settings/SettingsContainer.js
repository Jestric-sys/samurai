import React from 'react';
import Settings from './Settings';
import { getAuthUserThunkCreator } from '../../../redux/auth-reducer';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

class SettingsAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getAuthUserThunkCreator();
    };

    render() {
        if (!this.props.auth.isAuth) return <Navigate to={'/login'} />
        return <Settings />
    };
};

const mapStateToProps = (state) => ({auth: state.auth});
const dispatch = { getAuthUserThunkCreator };

const SettingsContainer = connect(mapStateToProps, dispatch)(SettingsAPIComponent);

export default SettingsContainer;