import './App.css';
import React, { Component } from 'react';
import store from './store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {

  componentDidMount() {
    store.dispatch();
  }

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
