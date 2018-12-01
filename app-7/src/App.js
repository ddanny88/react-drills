import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import Todo from './components/Todo';
import List from './components/List';
import NewTask from './components/NewTask';


class App extends Component {
  constructor(){
    super();

    this.state = {
    tasks: [],
    }
    this.upDateTasks = this.upDateTasks.bind(this);
  }

  upDateTasks(input){
    let tasks = [...this.state.tasks, input]
    this.setState({ tasks })
  }

  



  render() {
    return (
      <div className="App">
      <h1>My to-do list:</h1>
        <NewTask 
         upDateTasks={this.upDateTasks}
        />
        <List 
          tasks={this.state.tasks}
        />

      
      </div>
    );
  }
}

export default App;


