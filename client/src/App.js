import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';
import SavedBooks from './pages/SavedBooks';
import Home from './pages/Home';
import API from './utils/API';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.handleLoginCred = this.handleLoginCred.bind(this);
    this.loginSubmit = this.loginSubmit.bind(this);
    this.state = {
      user: ``,
      password: ``,
      userId: ``,
      loggedIn: false,
      errorMessage: ``
    }
  }
  
  loginSubmit(event){
    event.preventDefault();
    this.login();
  }
  login = async() => {
    let userInfo = {
      userName: this.state.user,
      password: this.state.password
    }

    let result = await API.login(userInfo);

    result ? 
      this.setState({
        user: result.data.userData.userName,
        password: ``,
        userId: result.data.userData.id,
        loggedIn: true,
        errorMessage: ``
      }) 
      
      : this.setState({errorMessage: `invalid login`});
  }
  handleLoginCred(event){
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
 
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={()=><Home parentState={this.state} />} />
          <Route exact path="/new" render={()=><CreateAccount parentState={this.state} />} />
          <Route exact path="/login" >      
          {this.state.userId ? <Redirect to='/'/> : 
            <Login 
              parentState={this.state} 
              handleLoginCred={this.handleLoginCred}
              loginSubmit={this.loginSubmit} 
              dataCallback={this.handleDataCallback}
            />}
          </Route>
          <Route exact path="/books" render={()=><SavedBooks parentState={this.state} />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
