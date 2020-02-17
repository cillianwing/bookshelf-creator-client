import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateSignUpForm } from '../actions/signUpForm';
import { signup } from '../actions/currentUser';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Bookshelf App
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const SignUp = ({signUpFormData, updateSignUpForm, signup}) => {
	const classes = useStyles();

	const handleInputChange = (event) => {
		const { name, value } = event.target
		const updatedFormInfo = {
			...signUpFormData,
			[name]: value
		}
		updateSignUpForm(updatedFormInfo)
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		signup(signUpFormData)
	}

	return (
		// <form onSubmit={handleSubmit}>
		// 	<input type="text" placeholder="Email" name="email" value={signUpFormData.email} onChange={handleInputChange} />
		// 	<input type="password" placeholder="Password" name="password" value={signUpFormData.password} onChange={handleInputChange} />
		// 	<input type="password" placeholder="Confirm Password" name="password_confirmation" value={signUpFormData.password_confirmation} onChange={handleInputChange} />
		// 	<input type="text" placeholder="Name" name="name" value={signUpFormData.name} onChange={handleInputChange} />
		// 	<textarea placeholder="Biography" name="biography" value={signUpFormData.biography} onChange={handleInputChange} />
		// 	<input type="number" placeholder="Books Goal" name="books_goal" value={signUpFormData.books_goal} onChange={handleInputChange} />
		// 	<input type="number" placeholder="Pages Goal" name="pages_goal" value={signUpFormData.pages_goal} onChange={handleInputChange} />
		// 	<input type="submit" value="Sign Up" />
		// </form>
		<Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
								value={signUpFormData.email}
								onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
								value={signUpFormData.password}
								onChange={handleInputChange}
              />
            </Grid>
						<Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password_confirmation"
                label="Confirm Password"
                type="password"
                id="password_confirmation"
                autoComplete="current-password"
								value={signUpFormData.password_confirmation}
								onChange={handleInputChange}
              />
            </Grid>
						<Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
								value={signUpFormData.name}
								onChange={handleInputChange}
              />
            </Grid>
						<Grid item xs={12}>
              <TextField
								rows="4"
								multiline
                name="biography"
                variant="outlined"
                required
                fullWidth
                id="biography"
                label="Biography"
                autoFocus
								value={signUpFormData.biography}
								onChange={handleInputChange}
              />
            </Grid>
						<Grid item xs={12} md={6}>
              <TextField
                name="books_goal"
                variant="outlined"
                required
                fullWidth
                id="books_goal"
                label="Books Goal"
                autoFocus
								type="number"
								value={signUpFormData.books_goal}
								onChange={handleInputChange}
              />
            </Grid>
						<Grid item xs={12} md={6}>
              <TextField
                name="pages_goal"
                variant="outlined"
                required
                fullWidth
                id="pages_goal"
                label="Pages Goal"
                autoFocus
								type="number"
								value={signUpFormData.pages_goal}
								onChange={handleInputChange}
              />
            </Grid>						
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="center">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
	)

}

const mapStateToProps = state => {
	return {
		signUpFormData: state.signUpForm
	}
}

export default connect(mapStateToProps, {updateSignUpForm, signup})(SignUp);