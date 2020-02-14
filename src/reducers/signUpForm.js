const initialState = {
	email: "",
	password: "",
	password_confirmation: "",
	name: "",
	biography: "",
	books_goal: "",
	pages_goal: ""
}

export default (state = initialState, action) => {
	switch (action.type) {
		case "UPDATE_SIGNUP_FORM":
			return action.formData
		case "RESET_SIGNUP_FORM":
			return initialState
		default:
			return state
	}
}