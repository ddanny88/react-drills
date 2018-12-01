import React, { Component } from 'react';




const Todo = props=>{

    let tasks = props.tasks.map((input, i)=> <p key={i}>{input}</p>)
    return(
        <div>
            <h1>My to-do list: </h1>

            <input 
            placeholder ="Enter new task"
            onChange={props.upDateInput}
            value = {props.input}
            >

            </input>



            <button 
            onClick={props.upDateTasks}>
            Add</button>

            {tasks}

        </div>
    )
}

export default Todo