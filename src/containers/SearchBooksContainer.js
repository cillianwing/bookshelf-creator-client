import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateSearchForm } from '../actions/searchForm';
import { search } from '../actions/searchBooks';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';

const useStyles = makeStyles(theme => ({
  root: {
    alignItems: 'center',
    margin: 'auto',
  },
  formControl: {
    margin: theme.spacing(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  EmptySelect: {
    marginTop: theme.spacing(2),
    width: 150,
  },
  EmptyInput: {
    marginTop: theme.spacing(2),
    width: 300,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SearchBooksContainer = (props) => {
  const classes = useStyles();

  const handleInputChange = (event) => {
    const { name, value } = event.target
		const updatedFormInfo = {
			...props.searchFormData,
			[name]: value
    }
		props.updateSearchForm(updatedFormInfo)
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		// search(searchFormData)
	}

  return (
    <Container component="main" maxWidth="lg">
      <form onSubmit={handleSubmit}>
        <FormControl className={classes.formControl}>
          <InputLabel shrink id="searchType">
            Search By:
          </InputLabel>
          <Select
            labelId="searchType"
            id="searchType"
            name="searchType"
            onChange={handleInputChange}
            value={props.searchFormData.searchType}
            displayEmpty
            className={classes.EmptySelect}
          >
            <MenuItem value="title">Title</MenuItem>
            <MenuItem value="author">Author</MenuItem>
            <MenuItem value="isbn">ISBN</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel shrink id="searchTerms">
            Search Terms:
          </InputLabel>
          <TextField labelId="searchTerms" id="searchTerms" name="searchTerms" value={props.searchFormData.searchTerms} className={classes.EmptyInput} onChange={handleInputChange} />
        </FormControl>
        <FormControl className={classes.formControl}>
          <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Search
          </Button>
        </FormControl>
      </form>
    </Container>
  )

}

const mapStateToProps = (state) => {
  return {
    searchedBooks: state.searchedBooks,
    loading: state.loading,
    searchFormData: state.searchForm
  }
}

export default connect(mapStateToProps, { updateSearchForm })(SearchBooksContainer);