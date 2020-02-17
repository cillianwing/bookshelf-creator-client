import React from 'react';
import { connect } from 'react-redux';

const SearchBooksContainer = () => {

}

const mapStateToProps = (state) => {
  return {
    searchedBooks: state.searchedBooks,
    loading: state.loading
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBooksContainer);