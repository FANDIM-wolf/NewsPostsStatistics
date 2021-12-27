import React , { useState} from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import MyButton from "./components/MyButton";
import MyInput from "./components/MyInput";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";

function App(){

  //data 
    const [posts,setPosts] = useState([
      {id:1,title:'js',body:'description'},
      {id:2,title:'js',body:'description'},
      {id:3,title:'js',body:'description'},
    ])
  // states of inputs 
  const [title,setTitle] = useState('');
  const [body , setBody] = useState('');
  // get data from uncontrolled input
 
  // add new post
  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      title,
      body
    }
    console.log(newPost)
    setPosts([...posts,newPost])

    
  }
  return(
    <div>
      <form>
      <MyInput type="text" placeholder="Name of the post"
      value={title} 
      onChange={e =>setTitle(e.target.value) }
      />
      <MyInput type="text" placeholder="Description of the post" 
      value={body}
      onChange={e=>setBody(e.target.value)}
      />
    
      <MyButton   onClick={addNewPost}>Create Post</MyButton>
      </form>
      <br/>
      <PostList posts={posts} key={posts.id}/>
    </div>
   
  );
}

export default App;
