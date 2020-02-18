export const getSearchedBooks = (books) => {
	return {
		type: 'ADD_SEARCHED_BOOKS',
		books
	}
}

export const getBooksByTitle = (formData) => {
	const search = formData.split(" ").join("+")
	return dispatch => {
		// fetch request from Google Books API
	}
}

export const getBooksByAuthor = (formData) => {
	const search = formData.split(" ").join("+")
		// fetch request from Google Books API
}

export const getBooksByTitleAuthor = (formData) => {
	const search = formData.split(" ").join("+")
		// fetch request from Google Books API
}

export const search = (formData) => {

}