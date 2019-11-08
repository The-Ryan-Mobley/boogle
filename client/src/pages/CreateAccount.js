import React, {Component} from 'react';
import { BrowserRouter as Redirect } from "react-router-dom";
import Wrapper from '../components/Wrapper';
import {Input, SubmitBtn} from '../components/Form';
import API from '../utils/API';
//add user info to db
export default class CreateAccount extends Component {
    state = {
        userName: ``,
        password: ``,
        confirmPassword: ``,
        sendHome: false,
        errorMessage: ``
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
            this.setState({errorMessage: `please fill out the forms completely`});
        }
    }
    createUser = async() =>{
        let userInfo = {
            userName: this.state.userName,
            password: this.state.password
        }
        if(this.state.confirmPassword === this.state.password){
            try{
                let result = await API.newUser(userInfo);
                if(result !== "404") {
                    this.setState({sendHome: true});
                } else {
                    this.setState({errorMessage: `something went wrong please try again`});
                }
            } catch{
                this.setState({errorMessage: `something went wrong please try again`});
            }
        } else {
            this.setState({errorMessage: `passwords must match`});
        }
    }

    render(){
        return(
            <Wrapper parentState = {this.props.parentState}>
                <div className="row">
                    <div className="twelve columns main-content">
                        <h2 className="bodyTitle">Enter a Username and password</h2>
                        <Input 
                        value={this.state.userName}
                        onChange={this.handleInputChange}
                        name="userName"
                        placeholder="Username"
                        />
                        <Input 
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        type="password"
                        name="password"
                        placeholder="password"
                        />
                        <Input 
                        value={this.state.confirmPassword}
                        onChange={this.handleInputChange}
                        type="password"
                        name="confirmPassword"
                        placeholder="confirm password"
                        />
                        {this.state.sendHome ? (<Redirect to="/"/>) :
                        (<SubmitBtn 
                        disabled={!(this.state.userName && this.state.password)}
                        onClick={this.handleFormSubmit}
                        >
                        Create
                        </SubmitBtn>)}
                        {this.state.errorMessage.length ? 
                        (<p className="error">{this.state.errorMessage}</p>) : (<p></p>)}


                    </div>
                </div>

            </Wrapper>
        )
    }
}