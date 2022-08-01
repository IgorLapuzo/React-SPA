import React from 'react';
import {addMessageActionCreator, newMessageElementActionCreator} from '../../redux/DialogsReducer'
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthNavigate } from '../hoc/withAuthNavigate';
import { compose } from 'redux';



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


export default compose (
	connect (mapStateToProps, mapDispatchToProps),
	withAuthNavigate
) (Dialogs)




