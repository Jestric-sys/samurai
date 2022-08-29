import Users from './UsersClass';
import { followAC, unfollowAC, setUsersAC } from '../../../redux/users-reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            const action = followAC(userId);
            dispatch(action);
        },
        unfollow: (userId) => {
            const action = unfollowAC(userId);
            dispatch(action);
        },
        setUsers: (users) => {
            const action = setUsersAC(users);
            dispatch(action);
        }
    };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;