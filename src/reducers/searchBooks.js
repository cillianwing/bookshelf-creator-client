const initialState = {
	searchedBooks: [],
	loading: false
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'LOAD_BOOKS':
			return {
				...state,
				searchedBooks: [...state.searchedBooks],
				loading: true
			}
		case 'ADD_SEARCHED_BOOKS':
			return {
				...state,
				searchedBooks: action.searchedBooks,
				loading: false
			}
		default:
			return state
	}
}