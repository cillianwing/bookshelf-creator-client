const getSearchedBooks = (books) => {
	return {
		type: 'ADD_SEARCHED_BOOKS',
		books
	}
}

const getBooksByTitle = (formData) => {
	const search = formData.split(" ").join("+")
	return dispatch => {
		// fetch request from Google Books API
	}
}

const getBooksByAuthor = (formData) => {
	const search = formData.split(" ").join("+")
		// fetch request from Google Books API
}

const getBooksByTitleAuthor = (formData) => {
	const search = formData.split(" ").join("+")
		// fetch request from Google Books API
}