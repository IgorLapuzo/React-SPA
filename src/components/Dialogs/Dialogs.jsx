import React from 'react'
import clases from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

	let dialogElements = props.dialogsPage.dialogs.map( name => <DialogItem name = {name.name} id = {name.id} /> );

	let messageElements = props.dialogsPage.messages.map( message => <Message message = {message.message} /> );

	let addMessage = () => props.sendMessage();	
				
	let onMessageChange = (e) => {
		let body = e.target.value;
		props.updateNewMessageBody(body);
	};

	return (
		<div className={clases.dialogsWrapper}>
			<div className={clases.dialogs}>
				{dialogElements}				
			</div>
			<div className={clases.messages}>
				{ messageElements }
				<textarea 
				onChange={ onMessageChange }
				value={props.dialogsPage.newDialogMessage} />
				<button onClick={ addMessage }>add message</button>
			</div>
		</div>
	)
};

export default Dialogs;