import React, {Component} from 'react';
import 'style.css';

export default class CreateAccount extends Component {
    state = {
        newUsername: "",
        newPassword: "",
        newConfirm: ""
    }
    render(){ 
        return(
            <div className="createPage">
                <from>
                <input type="text" value={this.state.newUsername} name="Username" placeholder="Username" />
                </from>
            
            </div>
        )
    }
}