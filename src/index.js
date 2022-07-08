import store from './redux/reduxStore';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';

ReactDOM.render(
	<React.StrictMode>
		<Provider store = {store}>
		  	<App />
		</Provider> 
	</React.StrictMode>,
	document.getElementById('root')
);




/*
state = {state} 
store = {store}
dispatch = { store.dispatch.bind(store) } 
 */