import store from './redux/reduxStore.js';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let renderEntireTree = (state) => {
	debugger;
	ReactDOM.render(
	  <React.StrictMode>
		 <App state = {state} 
		 store = {store}
		 dispatch = { store.dispatch.bind(store) } />
	  </React.StrictMode>,
	  document.getElementById('root')
	);
};
	
renderEntireTree(store.getState());

store.subscribe ( () => {
	let state = store.getstate();
	renderEntireTree (state)
});



