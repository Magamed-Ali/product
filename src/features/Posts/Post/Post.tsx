import React from 'react';
import {postType} from "../../../state/posts-reducer";
import MultiActionAreaCard from "../../../components/Card/MultiActionAreaCard";
import s from './post.module.css'

type PostType = {
    posts:  Array<postType>
}
function Post(props: PostType) {

    return (
        <div className={s.containerPost}>
            {
                props.posts.map(item => (
                    <MultiActionAreaCard item={item}/>
                ))
            }
        </div>
    );
}

export default Post;