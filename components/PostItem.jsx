import React from 'react';

const PostItem =(props)=>{
    return(
        <div>
            <p>{props.post.title}</p>
            <p>{props.post.body}</p>
            <p>{props.post.number}</p>
        </div>
        
        
    );
};

export default PostItem;