import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import NoMatch from './pages/NoMatch';
import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';
import SavedBooks from './pages/SavedBooks';
import BookInfo from './pages/BookInfo';
import Home from './pages/Home';
import API from './utils/API';
import logo from './logo.svg';
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
      loggedIn: false
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
    console.table(userInfo);

    let result = await API.login(userInfo);
    console.log(result);
    result ? 
      this.setState({
        user: result.data.userData.userName,
        password: ``,
        userId: result.data.userData.id,
        loggedIn: true
      }) 
      
      : console.log("invalid login");
      console.log(this.state);


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
          <Route exact path="/books/:id" render={()=><BookInfo parentState={this.state} />} />
          <Route render={()=><NoMatch parentState={this.state} />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
