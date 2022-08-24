import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profile-reducer';

const MyPostsContainer = (props) => {
    const addPost = () => {
        props.dispatch(addPostActionCreator());
    };
    const updateNewPostText = (text) => {
        props.dispatch(updateNewPostTextActionCreator(text));
    };
    return (
        <MyPosts />
    );
};

export default MyPostsContainer;