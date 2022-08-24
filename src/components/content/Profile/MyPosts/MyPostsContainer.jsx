import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profile-reducer';

const MyPostsContainer = (props) => {
    const state = props.store.getState();
    const addPost = () => {
        const action = addPostActionCreator()
        props.store.dispatch(action);
    };
    const updateNewPostText = (text) => {
        const action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    };
    return (
        <MyPosts 
            profilePage={state.profilePage}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
        />
    );
};

export default MyPostsContainer;