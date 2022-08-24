import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profile-reducer';
import StoreContext from '../../../../StoreContext';

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState().profilePage;
                const addPost = () => {
                    const action = addPostActionCreator();
                    store.dispatch(action);
                };
                const updateNewPostText = (text) => {
                    const action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                };
                return <MyPosts 
                            profilePage={state}
                            addPost={addPost}
                            updateNewPostText={updateNewPostText}
                        />
            }}
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;