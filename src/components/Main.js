import React, { useState } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/currentUser';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Bookshelf App
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[700] : theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const tiers = [
  {
    title: 'My Books',
    description: ['View all your read/unread books', 'Check off completed books', 'Jot down that inspirational quote', 'Stay on top of your reading!'],
    buttonText: 'View my books now',
    buttonVariant: 'contained',
  },
  {
    title: 'Search Books',
    description: [
      'Search for a new book to read',
      'Add the new book to your shelf',
      'Begin creating a book wishlist',
      'Brought to you by Google Books',
    ],
    buttonText: 'Search Books Now',
    buttonVariant: 'contained',
  },
  {
    title: 'Reading Stats',
    description: [
      'Stay ontop of your reading habit',
      'Never slack off again',
      'Track progress against your goal',
      'Compete with your friends',
    ],
    buttonText: 'View My Reading Stats',
    buttonVariant: 'contained',
  },
];

const Main = (props) => {
	const classes = useStyles();

	const handleLogout = (event) => {
		event.preventDefault();
		props.logout()
	}

	return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Bookshelf App
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="/books" className={classes.link}>
              My Books
            </Link>
            <Link variant="button" color="textPrimary" href="/search" className={classes.link}>
              Search Books
            </Link>
            <Link variant="button" color="textPrimary" href="/stats" className={classes.link}>
              Reading Stats
            </Link>
          </nav>
          <Button href="#" onClick={handleLogout} color="primary" variant="outlined" className={classes.link}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth="md" component="main" className={classes.heroContent}>
        <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom>
          Welcome back to your virtual bookshelf!
        </Typography>
        {/* <Typography variant="h5" align="center" color="textSecondary" component="p">
          
        </Typography> */}
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={3} alignItems="flex-end">
          {tiers.map(tier => (
            <Grid item key={tier.title} xs={12} sm={6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  titleTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <ul>
                    {tier.description.map(line => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} color="primary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
	)
}

export default connect(null, { logout })(Main);