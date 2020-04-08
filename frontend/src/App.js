import React from 'react';
import './App.css';
import Dashboard from './components/dashboard/dashboard.js'
import Header from './components/header/header.js'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const App = () => {
  return(
    <div className = "App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route
            exact path = "/dashboard"
            component = {Dashboard}
          />
          <Route
            exact path = "/registerCustomer"
            component = {Dashboard}
          />          
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
