import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
import profileReducer from './ProfileReducer';
import dialogsReducer from './DialogsReducer';
import usersReducer from './UsersReducer';
import authReducer from './AuthReducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: usersReducer,
	auth: authReducer,
	form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;