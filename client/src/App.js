import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from './pages/NoMatch';
import CreateAccountt from './pages/CreateAccount';
import SavedBooks from './pages/SavedBooks';
import BookInfo from './pages/BookInfo';
import Home from './pages/Home';
import logo from './logo.svg';
import './normalize.css';
import './skeleton.css';
import './App.css';


class App extends Component {
  state = {
    user: ``,
    userId: ``
  }
  render(){
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={<Home state={this.stae} />} />
          <Route exact path="/new" component={CreateAccountt} />
          <Route exact path="/books" component={SavedBooks} />
          <Route exact path="/books/:id" component={BookInfo} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
