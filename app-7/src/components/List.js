import React, { Component } from 'react'
import Todo from './Todo';


// List should be resposible for displaying the task inside of a task array on the app component in a list-like fashion. 
const List = props=>{

    let tasks = props.tasks.map((input, i)=> <Todo key={i}input={input}/>)
    return (
        <div>
           {tasks}  
        </div>
    )   
}

export default List;