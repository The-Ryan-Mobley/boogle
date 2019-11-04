import React, {Component} from 'react';
import './style.css';

export default class Wrapper extends Component {
    render(){
        return(
            <div className="wrapper">
                <header>
                    <div className="header-footer top-content">
                        <h1>BOOGLE</h1>
                        <div className="userZone">
                            {this.props.user ?
                                <div className="online-div">
                                    <h1>WELCOME {this.props.user}</h1>
                                    <a className="button-primary">VIEW SAVED</a>
                                    <a className="button-primary">LOGOUT</a>
                                </div>
                                : <a class="button-primary" href="/">LOGIN</a>
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