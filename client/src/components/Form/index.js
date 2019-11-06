import React, {Component} from 'react';
import './style.css';

export function Input(props) {
    return(
        <div className="row">
            <input className="u-full-width" {...props} />
        </div> 
    );
}
export function SubmitBtn(props) {
    return(
        <button {...props} className="button-primary">
            {props.children}
        </button>
    );
}