import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = (props) => {
	return (
		<div>
			<NavLink to="/signup">Sign Up</NavLink> or <NavLink to="login">Log In</NavLink>
		</div>
	)
}

export default Home;