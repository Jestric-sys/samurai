import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

let postsData = [
    {message: 'Hi, how ara you?', like: 15},
    {message: 'My first post', like: 20}
];

let postsElements = postsData
    .map(post => <Post message={post.message} like={post.like} />);

const MyPosts = () => {
    return(
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    );
};

export default MyPosts;