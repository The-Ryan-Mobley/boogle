import React, {Component} from 'react';
import Wrapper from '../components/Wrapper';
import {Input, SubmitBtn} from '../components/Form';
export default class CreateAccount extends Component {
    render(){

        return(
            <Wrapper parentState = {this.props.parentState}>
                <div className="row">
                    <div className="twelve columns main-content">
                        <Input 
                        value={this.props.parentState.userName}
                        name="userName"
                        placeholder="Username"
                        />

                    </div>
                </div>

            </Wrapper>
        )
    }
}