import React from 'react'
import {addMessageActionCreator, newMessageElementActionCreator} from '../../redux/DialogsReducer'
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {

	let state = props.store.getState().dialogsPage;

	let addMessage = () => props.store.dispatch(addMessageActionCreator());	
		
	let onMessageChange = (body) => {
		props.store.dispatch (newMessageElementActionCreator(body));
	};

	return <Dialogs updateNewMessageBody = { onMessageChange } 
	sendMessage = { addMessage } dialogsPage = {state} />	
	
};

export default DialogsContainer;

