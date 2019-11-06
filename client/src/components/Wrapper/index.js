import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'
import './style.css';

export default class Wrapper extends Component {
    state = {
        user: this.props.parentState.user,
        userId: this.props.parentState.userId
    }
    componentDidMount = () =>{
        console.log(this.state);
        console.log(this.state.userId.length);

    }
    sendToLink = event => {
        
    }
    render(){
        return(
            <div className="wrapper">
                <header>
                    <div className="header-footer top-content">
                        <h1>BOOGLE</h1>
                        <div className="userZone">
                            {this.props.parentState.userId.length ?
                                (<div className="online-div">
                                    <h1>WELCOME {this.props.parentState.user}</h1>
                                    <button className="button-primary">VIEW SAVED</button>
                                    <button className="button-primary">LOGOUT</button>
                                    <button className="button-primary" href="/">HOME</button>
                                </div>)
                                : (<div className="noUser">
                                    <a className="button-primary" href="/login">LOGIN</a>
                                   <button className="button-primary" href="/new">CREATE ACCOUNT</button>
                                </div>)
                            }
                        </div>

                    </div>
                </header>
                <div className="container">
                    {this.props.children}
                </div>
                <footer>
                    <div className="header-footer bottom-content">
                        <h1>BOTTOM TEXT</h1>
                    </div>
                </footer>
            </div>
        );
    }
}