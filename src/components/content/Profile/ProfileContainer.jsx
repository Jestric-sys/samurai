import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import * as axios from 'axios';
import { setUserProfile } from '../../../redux/profile-reducer';

class ProfileComponent extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/25638`)
                .then(res => {
                    this.props.setUserProfile(res.data);
                });
    };

    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    };
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

const dispatch = {
    setUserProfile
};

const ProfileContainer = connect(mapStateToProps, dispatch)(ProfileComponent);

export default ProfileContainer;