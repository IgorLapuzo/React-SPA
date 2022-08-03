import {legacy_createStore as createStore, combineReducers, applyMiddleware, compose} from 'redux';
import profileReducer from './ProfileReducer';
import dialogsReducer from './DialogsReducer';
import usersReducer from './UsersReducer';
import authReducer from './AuthReducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer } from 'redux-form'
import appReducer from './AppReducer';

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: usersReducer,
	auth: authReducer,
	form: formReducer,
	app: appReducer,
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store;