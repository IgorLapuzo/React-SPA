import React from 'react'
import clases from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {addMessageActionCreator, newMessageElementActionCreator, updateNewMessage} from '../../redux/DialogsReducer'



const Dialogs = (props) => {

	let newMessage = React.createRef ();

	let addMessage = () => {
		//props.addMessage();
		props.dispatch (addMessageActionCreator());
	};
		
	let dialogElements = props.dialogsPage.dialogs.map( name => <DialogItem name = {name.name} id = {name.id} /> );

	let messageElements = props.dialogsPage.messages.map( message => <Message message = {message.message} /> );
	
	let onMessageChange = () => {
		let message = newMessage.current.value;
		props.dispatch (newMessageElementActionCreator(message));
	}

	return (
		<div className={clases.dialogsWrapper}>
			<div className={clases.dialogs}>
				{dialogElements}
				
			</div>
			<div className={clases.messages}>
				{messageElements}
				<textarea ref={newMessage} 
				onChange={onMessageChange}
				value={props.newDialogMessage} />
				<button onClick={ addMessage }>add message</button>
			</div>

		</div>
	)
}

export default Dialogs;