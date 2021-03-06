import React, {Component} from 'react';
import Wrapper from '../components/Wrapper';
import {Input, SubmitBtn} from '../components/Form';
import API from '../utils/API';

export default class Login extends Component {
    
    render(){
        
        return(
            <Wrapper parentState = {this.props.parentState}>
                <div className="row">
                    <div className="twelve Columns">
                        <div className="logInPage">
                            <h1 className="bodyTitle">Enter your information below</h1>
                            <Input
                                value={this.props.parentState.userName}
                                onChange={this.props.handleLoginCred}
                                name="user"
                                placeholder="Enter username"
                                />
                            <Input 
                                value={this.props.parentState.password}
                                onChange={this.props.handleLoginCred}
                                type="password"
                                name="password"
                                placeholder="password"
                            />
                            <SubmitBtn 
                                disabled={!(this.props.parentState.user && this.props.parentState.password)}
                                onClick={this.props.loginSubmit}
                                name="login"
                                placeholder="login"
                            >
                            Login
                            </SubmitBtn>
                            {this.props.parentState.errorMessage.length ? 
                                (<p className="error">this.parentState.errorMessage</p>):
                                (<p></p>)}
                        </div>
                    </div>
                </div>
            </Wrapper>
        )
    }
}