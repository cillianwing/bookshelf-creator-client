import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import reducers
import currentUser from './reducers/currentUser';
import loginForm from './reducers/loginForm';
import signUpForm from './reducers/signUpForm';
import searchBooks from './reducers/searchBooks';
import searchForm from './reducers/searchForm';

const reducer = combineReducers({
	currentUser,
	loginForm,
	signUpForm,
	searchBooks,
	searchForm
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;