import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profile-reducer';

const MyPosts = (props) => {
    const postsElements = props.state.posts.map(post => <Post key={post.id} state={post} />);

    const newPostElement = React.createRef();

    const sendPost = () => {
        //props.addPost();
        props.dispatch(addPostActionCreator());
    };

    const onPostChange = () => {
        const text = newPostElement.current.value;
        //props.updateNewPostText(text);
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    return(
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.state.newPostText} />
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