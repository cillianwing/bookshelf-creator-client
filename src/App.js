import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import { getCurrentUser } from './actions/currentUser';
import Main from './components/Main';
import Home from './components/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';

function App(props) {
  const { loggedIn } = props

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      props.getCurrentUser()
    }
  }, [])

  return (
    <Router>
      <div className="App">
        { loggedIn ? <Main /> : <Home /> }
        <Switch>
          {/* all routes to be listed here <Route exact path='/'><Component /></Route> */}
          <Route exact path='/signup'><Signup /></Route>
          <Route exact path='/login'><Login /></Route>
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}

export default connect(mapStateToProps, { getCurrentUser })(App);
