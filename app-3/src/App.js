import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      foods: ['taco', 'pizza', 'cheeseburger'],
      userInput: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
      userInput: e.target.value
    })
  }

  render(){
    let food = this.state.foods.filter((food)=> food.includes(this.state.userInput)).map((food)=> <h2>{food}</h2>) 
  
    
    return (
      <div className="App">
        <input
          onChange={ this.handleChange }
        />
          <div>
            {food}
          </div>
      </div>
    )
  }
}
export default App;
