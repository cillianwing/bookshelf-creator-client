import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { getCurrentUser } from './actions/currentUser';
import Main from './components/Main';
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
        <Switch>
          { loggedIn ? <Route exact path='/' component={Main} /> : <Route exact path='/' component={Login} /> }
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/books' component={BooksContainer} />
          <Route exact path='/search' component={SearchBooksContainer} />
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
