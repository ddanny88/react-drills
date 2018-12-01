import React, { Component } from 'react';


export default class Login extends Component{
    constructor(){
        super();
        this.state={
            username: '',
            password: ''
        }

        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }


    handleChangeUsername(username){
        this.setState({ username })
    }

    handleChangePassword(password){
        this.setState({ password })
    }
    




    render(){
        return(
            <div>

            <input type="text" placeholder="username"
            onChange={ e=> this.handleChangeUsername(e.target.value)}
            ></input>

            <input type="text" placeholder="password"
            onChange={ e=> this.handleChangePassword(e.target.value)}
            ></input>

            <button 
            onClick={ ()=> {alert(`username: ${this.state.username} password: ${this.state.password} `)} } 
            >login</button>


            </div>
        )
    }



}







