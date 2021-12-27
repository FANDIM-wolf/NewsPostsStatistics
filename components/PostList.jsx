import React,{useState} from "react";
import PostItem from "./PostItem";
const PostList = ({posts}) => {
    return(
        <div>
            <h3>List of Posts</h3>
            {posts.map((post , index)=>
        <div>
          <PostItem number={index+1} post={post} key={post.id}/>
        </div>
        )}
        </div>
    );
};


export default PostList;