import React , { useState} from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import MyButton from "./components/MyButton";
import MyInput from "./components/MyInput";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import ToDoForm from "./components/ToDoForm";
import ToDo from "./components/ToDo";
import "./styles/app.css";
import {PieChart,Pie,Sector,Cell, Tooltip ,  LineChart, Line, CartesianGrid, XAxis, YAxis , Legend, ResponsiveContainer } from "recharts";

function App(){


  //data 
    const data = [
      {name:"Math", value:22},
      {name:"Biology", value:42},
      {name:"English", value:25},
      {name:"ComputerScience", value:52},
    ]
    // data for line plot 
    const data_for_line_graph = [
      
      {name: 'Январь', uv: 450, pv: 2400, amt: 320},
      {name: 'Февраль', uv: 400, pv: 3400, amt: 320},
      {name: 'Март', uv: 900, pv: 3400, amt: 320},
      {name: 'Апрель', uv: 600, pv: 3400, amt: 320},
      {name: 'Май', uv: 700, pv: 3400, amt: 320},
      {name: 'Июнь', uv: 900, pv: 3400, amt: 320},

  
    ];

    const data_for_liner_chart = [
      {
        name: 'Понедельник',
        uv: 40,
        pv: 24,
        amt: 2400,
      },
      {
        name: 'Вторник',
        uv: 30,
        pv: 13,
        amt: 2210,
      },
      {
        name: 'Среда',
        uv: 20,
        pv: 98,
        amt: 2290,
      },
      {
        name: 'Четверг',
        uv: 27,
        pv: 39,
        amt: 2000,
      },
      {
        name: 'Пятница',
        uv: 18,
        pv: 48,
        amt: 2181,
      },
      {
        name: 'Суббота',
        uv: 23,
        pv: 38,
        amt: 2500,
      },
      {
        name: 'Воскресенье',
        uv: 23,
        pv: 38,
        amt: 2500,
      },
    ]

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


      <h1>Build React Graphs The Easy Way</h1>

      <br/>
      <br/>
      <br/>
      <br/>

  

      <ul>
        {data.map((data) =>
        { 
          return( 
          <li>{data.name} amount of marks:{data.value}</li>
          )
        } 
        )}
      </ul>
        <PieChart width={400} height={400}>
          <Pie 
          dataKey="value"
          isAnimationActive ={false}
          data={data}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#8884d8"
          label
          />
          <Tooltip/>
        </PieChart>
        <br/>
        <br/>
        <br/>
        <h1 >Расходы</h1>
        <p>Данные в рублях и в месяцах</p>
        

        <LineChart width={600} height={300} data={data_for_line_graph}>
        <Line type="monotone" dataKey="uv" stroke="#00ff00" />
        <CartesianGrid stroke="#0000ff" />
        <XAxis dataKey="name" />
        <YAxis />
        </LineChart>
        <br/><br/>
        
        <p>Доходы и Расходы в неделю</p>
        
        <LineChart width={500} height={300} data={data_for_liner_chart}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
    </div>
   
  );
}

export default App;
