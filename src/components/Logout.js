import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/currentUser';

const Logout = ({ logout }) => {
	return (
		logout()
	)
}

export default connect(null, { logout })(Logout);