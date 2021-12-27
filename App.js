import React , { useState} from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import MyButton from "./components/MyButton";
import MyInput from "./components/MyInput";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import ToDoForm from "./components/ToDoForm";
import ToDo from "./components/ToDo";

function App(){


  //data 

    const [todos,setTodos] = useState([
      {id:0,task:'name',complete:false},
    ]);

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
    console.log(title)
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      title,
      body
    }
    console.log(newPost)
    setPosts([...posts,newPost])

    
  }

  // add task
  const addTask = (userInput) =>{
    if(userInput){
      const Item = {
        id: 132,
        task:userInput,
        complete:false
      }
      setTodos([...todos,Item])
    }
  }
  // remove task
  const removeTask = (id) =>{
    setTodos([...todos.filter((todo) => todo.id !== id )])
  }
  // handle task
  const handleToggle = (id) =>{
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? {...todo , complete: !todo.complete} :{...todo}
      )

    ])
  }

  return(
    <div>
      
      <h2>List of tasks:{todos.length}</h2>
      <ToDoForm addTask={addTask}/>
      {todos.map((todo) => {
        return (
          <ToDo todo={todo} key={todo.id} toggleTask={handleToggle} removeTask={removeTask} />
        )
      })}
    </div>
   
  );
}

export default App;
