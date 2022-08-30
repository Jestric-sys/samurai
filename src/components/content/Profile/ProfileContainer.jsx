import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import * as axios from 'axios';
import { setUserProfile } from '../../../redux/users-reducer';

class ProfileComponent extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/25638`, { mode: 'no-cors' })
                .then(res => {
                    this.props.setUserProfile(res.data);
                });
    };

    render() {
        return <Profile {...this.props} />
    };
};

const mapStateToProps = (state) => ({
    user: state.usersPage.user
});

const dispatch = {
    setUserProfile
};

const ProfileContainer = connect(mapStateToProps, dispatch)(ProfileComponent);

export default ProfileContainer;