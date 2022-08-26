import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img src={props.post.img} alt="avatar logo" />
                { props.post.message }
                <div>
                    <span>{ props.post.like } like</span>
                </div>
            </div>
        </div>
    );
};

export default Post;