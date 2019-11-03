import React, {Component} from 'react';
import 'style.css';

export class Input extends Component {
    render(){
        return(
            <div className="row">
                <input className="u-full-width" {...this.props} />
            </div> 
        )
    }
}
export class SubmitBtn extends Component {
    render(){
        return(
            <button {...this.props} className="button-primary">
                {props.children}
            </button>
        )
    }
}