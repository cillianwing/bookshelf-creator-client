import { resetSearchForm } from './searchForm'

export const getSearchedBooks = searchedBooks => {
	return {
		type: "ADD_SEARCHED_BOOKS",
		searchedBooks
	}
}

export const loadSearchedBooks = () => {
	return {
		type: "LOAD_BOOKS"
	}
}

export const search = formData => {
	const searchType = formData.searchType === "title" ? "intitle" : formData.searchType === "author" ? "inauthor" : "isbn"
	const searchTerms = formData.searchTerms.split(" ").join("+")
	const apiURL = `https://www.googleapis.com/books/v1/volumes?q=${searchType}:${searchTerms}&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}`
	return dispatch => {
		dispatch(loadSearchedBooks());
		return fetch(apiURL, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},
			success: function(response) {
				console.log(response)
			}
		})
		.then(res => res.json())
		.then(data => {
			if (data.error) {
				console.log(data.error)
			}
			dispatch(getSearchedBooks(data.items))
			dispatch(resetSearchForm())
		})
		.catch(error => {
			console.log(error)
		})
	}
}