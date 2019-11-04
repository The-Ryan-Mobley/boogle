import React, {Component} from 'react';
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
    render(){
        return(
            <div className="wrapper">
                <header>
                    <div className="header-footer top-content">
                        <h1>BOOGLE</h1>
                        <div className="userZone">
                            {this.state.userId.length ?
                                (<div className="online-div">
                                    <h1>WELCOME {this.props.user}</h1>
                                    <a className="button-primary">VIEW SAVED</a>
                                    <a className="button-primary">LOGOUT</a>
                                </div>)
                                : (<div className="noUser">
                                    <a className="button-primary" href="/">LOGIN</a>
                                   <a className="button-primary" href="/new">CREATE ACCOUNT</a>
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