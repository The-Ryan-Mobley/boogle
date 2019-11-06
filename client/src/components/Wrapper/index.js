import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'
import './style.css';

export default class Wrapper extends Component {
    state = {
        user: this.props.parentState.user,
        userId: this.props.parentState.userId,
        navSave: false,
        navHome: false,
        navIn: false,
        navCreate: false
    }
    componentDidMount = () =>{
        console.log(this.state);
        console.log(this.state.userId.length);

    }
    sendToLink = event => {
        //<Redirect to='/'/>
        console.log("click");
        console.log(event.target)
        const { name} = event.target;
        this.setState({
            [name]: true
        });
    }
    render(){
        return(
            <div className="wrapper">
                <header>
                    <div className="header-footer top-content">
                        {this.state.navHome ? (<Redirect to="/" />) : 
                        (<a onClick={this.sendToLink} name="navHome" className="title headLink">BOOGLE </a>)}
                        <div className="userZone">
                            {this.props.parentState.userId.length ?
                                (<div className="online-div">
                                    <p className="welcomeTitle">WELCOME {this.props.parentState.user}!</p>
                                    {this.state.navSave ? (<Redirect to="/books"/>) : 
                                        (<button onClick={this.sendToLink} name="navSave" className="button navButton" >VIEW SAVED</button>)}
                                    {this.state.navHome ? (<Redirect to="/"/>) : (<button onClick={this.sendToLink} name="navHome"  className="button navButton">HOME</button>)}
                                    <a name="navOut" className="button navButton logOut" href="/">LOGOUT</a>
                                </div>)
                                : (<div className="noUser">
                                    {this.state.navIn ? (<Redirect to="/login"/>) :
                                    (<button onClick={this.sendToLink} name="navIn" className="button navButton">LOGIN</button>)}
                                   {this.state.navCreate ? (<Redirect to="/new"/>) : 
                                   (<button onClick={this.sendToLink} name="navCreate" className="button navButton">CREATE ACCOUNT</button>)}
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
                        <p className="title">created by Ryan Mobley</p>
                    </div>
                </footer>
            </div>
        );
    }
}