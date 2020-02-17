import React from 'react';
import { connect } from 'react-redux';
import { updateSearchForm } from '../actions/searchForm'

const SearchBooksContainer = (props) => {

  return (
    <form>
      <input type="text" name="title" id="title" />
      <input type="text" name="author" id="author" />
      <input type="text" name="isbn" id="isbn" />

      <input type="submit" value="Search Books" />
    </form>
  )

}

const mapStateToProps = (state) => {
  return {
    searchedBooks: state.searchedBooks,
    loading: state.loading
  }
}

export default connect(mapStateToProps, { updateSearchForm })(SearchBooksContainer);