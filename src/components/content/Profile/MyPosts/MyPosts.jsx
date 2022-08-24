import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/state';

const MyPosts = (props) => {
    const postsElements = props.posts.map(post => <Post key={post.id} state={post} />);

    const newPostElement = React.createRef();

    const sendPost = () => {
        props.dispatch(addPostActionCreator());
    };

    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    return(
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={sendPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    );
};

export default MyPosts;