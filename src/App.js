import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Directory from './components/Directory/Directory';
import ShopPage from './pages/Shop/Shop'

import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Directory} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
