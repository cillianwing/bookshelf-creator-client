import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateSignupForm } from '../actions/signupForm';
import { signup } from '../actions/currentUser';

const Signup = ({signupFormData, updateSignupForm, signup}) => {

	const handleInputChange = (event) => {
		const { name, value } = event.target
		const updatedFormInfo = {
			...signupFormData,
			[name]: value
		}
		updateSingupForm(updatedFormInfo)
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		signup(signupFormData)
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" placeholder="Email" name="email" value={signupFormData.email} onChange={handleInputChange} />
			<input type="password" placeholder="Password" name="password" value={signupFormData.password} onChange={handleInputChange} />
			<input type="text" placeholder="Name" name="name" value={signupFormData.name} onChange={handleInputChange} />
			<textarea placeholder="Biography" name="biography" value={signupFormData.biography} onChange={handleInputChange} />
			<input type="number" placeholder="Books Goal" name="booksGoal" value={signupFormData.booksGoal} onChange={handleInputChange} />
			<input type="number" placeholder="Pages Goal" name="pagesGoal" value={signupFormData.pagesGoal} onChange={handleInputChange} />
			<input type="submit" value="Sign Up" />
		</form>
	)

}

const mapStateToProps = state => {
	signupFormData: state.signupForm
}

export default connect(mapStateToProps, {})(Signup);