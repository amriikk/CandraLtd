import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/Shop/Shop';
import LoginPage from './pages/LoginPage/LoginPage';
import ContactPage from './pages/ContactPage/ContactPage'
import ResourcePage from './pages/ResourcePage/ResourcePage'
import Header from './components/Header/Header';
import { auth, createUserProfileDocument } from './Firebase/Firebase.Utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import './App.css';

class App extends Component {

  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
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
          <Route exact path='/login' 
                 render= { () => 
                    this.props.currentUser ? ( 
                      <Redirect to='/' />
                    ) : (
                      <LoginPage />
                    )
                } 
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
