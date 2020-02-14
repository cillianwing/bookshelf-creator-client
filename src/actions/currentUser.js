import { resetLoginForm } from './loginForm';
import { resetSignUpForm } from './signUpForm';

export const setCurrentUser = user => {
	return {
		type: "SET_CURRENT_USER",
		user
	}
}

export const clearCurrentUser = () => {
	return {
		type: "CLEAR_CURRENT_USER"
	}
}

export const login = (credentials) => {
	return dispatch => {
		return fetch(`http://localhost:3000/api/v1/login`, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			body: JSON.stringify(credentials)
		})
		.then(res => res.json())
		.then(data => {
			localStorage.setItem("token", data.jwt)
			dispatch(setCurrentUser(data.user))
			dispatch(resetLoginForm())
		})
		.catch(console.log)
	}
}

export const signup = (credentials) => {
	return dispatch => {
		return fetch(`http://localhost:3000/api/v1/users`, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			body: JSON.stringify({user: credentials})			
		})
		.then(res => res.json())
		.then(data => {
			localStorage.setItem("token", data.jwt)
			dispatch(setCurrentUser(data.user))
			dispatch(resetSignUpForm())
		})
		.catch(console.log)
	}
}

export const logout = (event) => {
	return dispatch => {
		localStorage.setItem("token", "")
		dispatch(clearCurrentUser())
	}
}

export const getCurrentUser = () => {
	const token = localStorage.getItem("token")
	return dispatch => {
		return fetch(`http://localhost:3000/api/v1/auto_login`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
		.then(res => res.json())
		.then(data => {
			dispatch(setCurrentUser(data))
		})
		.catch(console.log)
	}
}