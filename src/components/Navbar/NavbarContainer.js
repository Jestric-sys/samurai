import React from 'react';
import Navbar from './Navbar';
import { setFriendsAC } from '../../redux/sidebar-reducer';
import { getAuthUserThunkCreator } from '../../redux/auth-reducer';
import { connect } from 'react-redux';

class NavbarAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getAuthUserThunkCreator();
        this.props.setFriendsAC([
            {id: 1, img: 'https://icons-for-free.com/download-icon-avatar-1320568024619304547_512.png', name: 'Denis'},
            {id: 2, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI3vvVZ-pOGsyhaNEm9s-tm96lh7OGxJrpPQ&usqp=CAU', name: 'Vladimir'},
            {id: 3, img: 'https://icon-library.com/images/avatar-icon-free/avatar-icon-free-15.jpg', name: 'Tommy'}
        ]);
    };

    render() {
        return <Navbar {...this.props} friends={this.props.sidebar.friends} />
    };
};

const mapStateToProps = (state) => ({
    sidebar: state.sidebar,
    auth: state.auth
});

const dispatch = {
    setFriendsAC,
    getAuthUserThunkCreator
};

const NavbarContainer = connect(mapStateToProps, dispatch)(NavbarAPIComponent);

export default NavbarContainer;