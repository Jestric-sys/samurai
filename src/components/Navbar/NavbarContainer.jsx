import Navbar from './Navbar';
import { setFriendsAC } from '../../redux/sidebar-reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setFriends: (friends) => {
            const action = setFriendsAC(friends);
            dispatch(action);
        }
    };
};

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;