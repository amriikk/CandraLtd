import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/Shop/Shop';
import LoginPage from './pages/LoginPage/LoginPage';
import ContactPage from './pages/ContactPage/ContactPage'
import ResourcePage from './pages/ResourcePage/ResourcePage'
import Header from './components/Header/Header';
import { auth, createUserProfileDocument } from './Firebase/Firebase.Utils';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/contact' component={ContactPage} />
          <Route path='/resource' component={ResourcePage} />
          <Route path='/login' component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
