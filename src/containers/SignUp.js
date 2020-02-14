import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateSignUpForm } from '../actions/signUpForm';
import { signup } from '../actions/currentUser';

const SignUp = ({signUpFormData, updateSignUpForm, signup}) => {

	const handleInputChange = (event) => {
		const { name, value } = event.target
		const updatedFormInfo = {
			...signUpFormData,
			[name]: value
		}
		updateSingupForm(updatedFormInfo)
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		signup(signUpFormData)
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" placeholder="Email" name="email" value={signUpFormData.email} onChange={handleInputChange} />
			<input type="password" placeholder="Password" name="password" value={signUpFormData.password} onChange={handleInputChange} />
			<input type="text" placeholder="Name" name="name" value={signUpFormData.name} onChange={handleInputChange} />
			<textarea placeholder="Biography" name="biography" value={signUpFormData.biography} onChange={handleInputChange} />
			<input type="number" placeholder="Books Goal" name="booksGoal" value={signUpFormData.booksGoal} onChange={handleInputChange} />
			<input type="number" placeholder="Pages Goal" name="pagesGoal" value={signUpFormData.pagesGoal} onChange={handleInputChange} />
			<input type="submit" value="Sign Up" />
		</form>
	)

}

const mapStateToProps = state => {
	signUpFormData: state.signUpForm
}

export default connect(mapStateToProps, {})(SignUp);