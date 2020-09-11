import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/Shop/Shop';
import Login from './pages/LoginPage/LoginPage;
import Header from './components/Header/Header';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/login' component={Login} />
      </Switch>
    </div>
  );
}

export default App;
