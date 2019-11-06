import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Wrapper from '../components/Wrapper';
import {Input, SubmitBtn} from '../components/Form';
import API from '../utils/API';

export default class Login extends Component {
    
    render(){
        
        return(
            <Wrapper parentState = {this.props.parentState}>
                <Input
                    value={this.props.parentState.userName}
                    onChange={this.props.handleLoginCred}
                    name="user"
                    placeholder="Enter username"
                />
                <Input 
                    value={this.props.parentState.password}
                    onChange={this.props.handleLoginCred}
                    name="password"
                    placeholder="confirm password"
                />
                <SubmitBtn 
                    disabled={!(this.props.parentState.user && this.props.parentState.password)}
                    onClick={this.props.loginSubmit}
                />
            </Wrapper>
        )
    }
}