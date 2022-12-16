import React from 'react';
import s from './MyPosts.module.css';
import but from '../../../common/button/Button.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='text...' component={'textarea'} name={'post'} />
            </div>
            <div>
                <button className={but.button}>Add post</button>
            </div>
        </form>
    );
};

const PostReduxForm = reduxForm({
    form: 'post'
})(PostForm);

const MyPosts = (props) => {
    const postsElements = props.profilePage.posts.map(post => <Post key={post.id} post={post} />);
    const onSubmit = (formData) => {
        props.sendPost(formData);
    };

    return(
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <PostReduxForm onSubmit={onSubmit} />
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    );
};

export default MyPosts;