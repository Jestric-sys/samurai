import React from 'react';
import MyPosts from './MyPosts';
import { addPost, setPosts } from '../../../../redux/profile-reducer';
import { connect } from 'react-redux';

class MyPostsAPIComponent extends React.Component {
    componentDidMount() {
        this.props.setPosts([
            {id: 1, img: 'https://icons-for-free.com/download-icon-avatar-1320568024619304547_512.png', message: 'Hi, how ara you?', like: 15},
            {id: 2, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI3vvVZ-pOGsyhaNEm9s-tm96lh7OGxJrpPQ&usqp=CAU', message: 'My first post', like: 20}
        ]);
    };

    sendPost = (post) => this.props.addPost(post);

    render() {
        return <MyPosts 
                    profilePage={this.props.profilePage}
                    sendPost={this.sendPost}
                />
    };
};

const mapStateToProps = (state) => ({ profilePage: state.profilePage });
const dispatch = {
    addPost,
    setPosts
};

const MyPostsContainer = connect(mapStateToProps, dispatch)(MyPostsAPIComponent);

export default MyPostsContainer;