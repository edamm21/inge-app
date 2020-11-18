import './App.css';
import React, { Component } from 'react';
import store from './store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';

class App extends Component {

  render() {
    return (
      <Router>
        <Provider store={store}>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Landing}/>
          </Switch>
        </Provider>
      </Router>
    );
  };
}

export default App;
