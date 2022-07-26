import React from 'react';
import {addMessageActionCreator, newMessageElementActionCreator} from '../../redux/DialogsReducer'
import Dialogs from './Dialogs';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
		isAuth: state.auth.isAuth
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessageBody: (body) => {
			dispatch (newMessageElementActionCreator(body))
		},
		sendMessage: () => {
			dispatch(addMessageActionCreator());	
		},
	}
};

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs)

export default DialogsContainer;




/*const DialogsContainer = (props) => {

	let state = props.store.getState().dialogsPage;

	let addMessage = () => props.store.dispatch(addMessageActionCreator());	
		
	let onMessageChange = (body) => {
		props.store.dispatch (newMessageElementActionCreator(body));
	};

	return <Dialogs updateNewMessageBody = { onMessageChange } 
	sendMessage = { addMessage } dialogsPage = {state} />	
};

*/