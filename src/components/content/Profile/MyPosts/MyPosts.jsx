import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    const postsElements = props.profilePage.posts.map(post => <Post key={post.id} post={post} />);
    const newPostElement = React.createRef();

    return(
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea 
                        onChange={() => props.onPostChange(newPostElement.current.value)} 
                        ref={newPostElement} 
                        value={props.profilePage.newPostText} 
                    />
                </div>
                <div>
                    <button 
                        onClick={() => newPostElement.current.value !== '' ? props.sendPost() : alert('Вы не ввели текст')}
                        className={s.button}
                    >Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    );
};

export default MyPosts;