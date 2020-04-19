import React from 'react';
import {Route, Switch} from 'react-router-dom'

import './App.css';

import HomePage from "./pages/homepage";
import ShopPage from "./pages/shop/shop";
import Login from "./pages/login/login";
import Header from "./components/header/header";

function App() {
  return (
      <div>

          <Header/>

          <Switch>
              <Route exact path='/' component={HomePage}/>
              <Route path='/shop' component={ShopPage}/>
              <Route path='/signin' component={Login}/>
          </Switch>
      </div>
  );
}

export default App;
