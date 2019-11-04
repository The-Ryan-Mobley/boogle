import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from './pages/NoMatch';
import CreateAccount from './pages/CreateAccount';
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
          <Route exact path="/" render={<Home parentState={this.state} />} />
          <Route exact path="/new" render={<CreateAccount parentState={this.state} />} />
          <Route exact path="/books" render={<SavedBooks parentState={this.state} />} />
          <Route exact path="/books/:id" render={<BookInfo parentState={this.state} />} />
          <Route render={<NoMatch parentState={this.state} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
