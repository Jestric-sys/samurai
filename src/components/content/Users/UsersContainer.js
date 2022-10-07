import React from 'react';
import { follow, unfollow, setCurrentPage, following, getUsersThunkCreator, unfollowUserThunkCreator, followUserThunkCreator } from '../../../redux/users-reducer';
import { connect } from 'react-redux';
import Users from './Users';
import PreLoader from '../../common/preloader/Preloader';
import { getAuthUserThunkCreator } from '../../../redux/auth-reducer';

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getAuthUserThunkCreator();
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (p) => {
        this.props.setCurrentPage(p);
        this.props.getUsersThunkCreator(p, this.props.pageSize);
    };

    followUser = (id) => {
        this.props.following(true, id);
        this.props.followUserThunkCreator(id);
    };

    unfollowUser = (id) => {
        this.props.following(true, id);
        this.props.unfollowUserThunkCreator(id);
    };

    render() {
        return this.props.auth.isAuth && this.props.auth.login !== null
        ? <>
            { this.props.isFetching ? <PreLoader /> : null }
            <Users 
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                isFetching={this.props.isFetching}
                following={this.props.following}
                followingInProgress={this.props.followingInProgress}
                unfollowUser={this.unfollowUser}
                followUser={this.followUser}
            />
        </>
        : <div>Вы не автаризованы</div>
    };
};

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    auth: state.auth,
    followingInProgress: state.usersPage.followingInProgress,
    unfollowUserThunkCreator: state.usersPage.unfollowUserThunkCreator,
    followUserThunkCreator: state.usersPage.followUserThunkCreator
});
const dispatch = {
    follow,
    unfollow,
    setCurrentPage,
    getAuthUserThunkCreator,
    following,
    getUsersThunkCreator,
    unfollowUserThunkCreator,
    followUserThunkCreator
};

const UsersContainer = connect(mapStateToProps, dispatch)(UsersAPIComponent);

export default UsersContainer;