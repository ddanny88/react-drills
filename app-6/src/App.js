import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Todo from './components/Todo'

class App extends Component {
  constructor(){
    super();

    this.state = {
    tasks: [],
    input: ''
    }
    this.upDateTasks = this.upDateTasks.bind(this);
    this.upDateInput = this.upDateInput.bind(this);
  }

  upDateTasks(){
    let tasks = [...this.state.tasks, this.state.input]
    this.setState({ tasks, input: '' })
  }

  upDateInput(e){
    this.setState({ input: e.target.value})
  }



  render() {
    return (
      <div className="App">
        <Todo  
        tasks={this.state.tasks}
        upDateTasks={this.upDateTasks}
        upDateInput ={this.upDateInput}
        input={this.state.input}
        />
      </div>
    );
  }
}

export default App;
