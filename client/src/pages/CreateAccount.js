import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Wrapper from '../components/Wrapper';
import {Input, SubmitBtn} from '../components/Form';
import API from '../utils/API';
//add user info to db
export default class CreateAccount extends Component {
    state = {
        userName: ``,
        password: ``,
        confirmPassword: ``,
        errorMsg: ``
    }
    handleInputChange = event =>{
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    handleFormSubmit = event =>{
        event.preventDefault();
        if (this.state.userName && this.state.password) {
            this.createUser();
        } else {
            console.log("please fill out the forms completely");
        }
    }
    createUser = async() =>{
        let userInfo = {
            userName: this.state.userName,
            password: this.state.password
        }
        console.log(userInfo);
        console.log(this.state.confirmPassword);
        if(this.state.confirmPassword === this.state.password){
            try{
                let result = await API.newUser(userInfo);
                console.log(result);
                if(result !== "404") {
                    return <Redirect to='/' />
                } else {
                    console.log("failed to send to db");
                }
            } catch{
                console.log("failed to query");
            }
        } else {
            console.log("failed to create passwords dont match");
        }
    }

    render(){
        return(
            <Wrapper parentState = {this.props.parentState}>
                <div className="row">
                    <div className="twelve columns main-content">
                        <Input 
                        value={this.state.userName}
                        onChange={this.handleInputChange}
                        name="userName"
                        placeholder="Username"
                        />
                        <Input 
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name="password"
                        placeholder="password"
                        />
                        <Input 
                        value={this.state.confirmPassword}
                        onChange={this.handleInputChange}
                        name="confirmPassword"
                        placeholder="confirm password"
                        />
                        <SubmitBtn 
                        disabled={!(this.state.userName && this.state.password)}
                        onClick={this.handleFormSubmit}
                        >
                        Create
                        </SubmitBtn>


                    </div>
                </div>

            </Wrapper>
        )
    }
}