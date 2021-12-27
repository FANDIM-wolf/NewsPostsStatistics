import React, { useState } from 'react';

const Counter = function(){
    const [likes,setCount] = useState(0);
    const [value,setValue] = useState("Text in input");

    function Increment(){
        setCount(likes+1);
        console.log(likes);
    }
    function Decrement(){
        setCount(likes-1)
        console.log(likes);
    }
    return(
        <div>
            <h1>{likes}</h1>
            <h1>{value}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <input type="text"
            onChange={event => setValue(event.target.value)}
             value={value}></input>
        </div>
    )
}

export default Counter;