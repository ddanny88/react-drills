import React, { Component } from 'react'


class NewTask extends Component{
    constructor(){
        super();
        this.state={
            input: ''
        }

        this.upDateInput = this.upDateInput.bind(this);
        this.handleAddVal = this.handleAddVal.bind(this);
    }


    upDateInput(e){
        this.setState({ input: e.target.value})
    }

    handleAddVal(){
        this.props.upDateTasks(this.state.input)
        this.setState({
            input: ''
        })
    }
    
    


    render(){
        return (

            <div>
                <input 
                    placeholder ="Enter new task"
                    onChange={this.upDateInput}
                    value = {this.state.input}
                    >
                </input>


                <button 
                    onClick={this.handleAddVal}>
                Add </button>

            </div>
        )
    }


}

export default NewTask;