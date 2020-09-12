import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/Shop/Shop';
import LoginPage from './pages/LoginPage/LoginPage';
import Header from './components/Header/Header';
import { auth } from './Firebase/Firebase.Utils';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/login' component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
