import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { getCurrentUser } from './actions/currentUser';
import Main from './components/Main';
import Home from './components/Home';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import SearchBooksContainer from './containers/SearchBooksContainer';
import BooksContainer from './containers/BooksContainer';

function App(props) {
  const { loggedIn } = props

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      props.getCurrentUser()
    }
  }, [])

  return (
    
    <div className="App">
      <Router>
        { loggedIn ? <Main /> : <Login /> }
        <Switch>
          <Route exact path='/signup'><SignUp /></Route>
          <Route exact path='/login'><Login /></Route>
          <Route exact path='/books'><BooksContainer /></Route>
          <Route exact path='/search'><SearchBooksContainer /></Route>
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}

export default connect(mapStateToProps, { getCurrentUser })(App);
