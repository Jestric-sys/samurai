import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import * as axios from 'axios';
import { setUserProfile } from '../../../redux/profile-reducer';
import { useParams } from 'react-router-dom';

// hooks
const withRouter = WrappedComponent => props => {
    const params = useParams();

    return (
        <WrappedComponent 
            {...props}
            params={params}
        />
    );
};

class ProfileComponent extends React.Component {

    componentDidMount() {
        let userID = this.props.params.userID;
        if (!userID) {
            userID = 25638;
        };
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
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

const WithUrlDataContainerComponent = withRouter(ProfileComponent);

const ProfileContainer = connect(mapStateToProps, dispatch)(WithUrlDataContainerComponent);

export default ProfileContainer;