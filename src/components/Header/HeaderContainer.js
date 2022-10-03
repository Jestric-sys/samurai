import React from 'react';
import Header from './Header';
import { setAuthUser } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import * as axios from 'axios';

class HeaderAPIComponent extends React.Component {

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

    render() {return <Header {...this.props} />};
};

const mapStateToProps = (state) => ({auth: state.auth});
const dispatch = { setAuthUser };

const HeaderContainer = connect(mapStateToProps, dispatch)(HeaderAPIComponent);

export default HeaderContainer;