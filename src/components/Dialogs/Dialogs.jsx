import React from 'react'
import clases from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';


const Dialogs = (props) => {

	let newMassage = React.createRef ();

	let addMessage = () => {
		props.addMessage();
	}
	
	let messageElements = props.state.messages.map( message => (<Message message = {message.message} />));

	let dialogElements = props.state.dialogs.map( name => (<DialogItem name = {name.name} />));

	let onMessageChange = () => {
		let mtext = newMassage.current.value;
		props.updateNewMessage (mtext);
	}

	return (
		<div className={clases.dialogsWrapper}>
			<div className={clases.dialogs}>
				{dialogElements}
				
			</div>
			<div className={clases.messages}>
				{messageElements}
				<textarea ref={newMassage} 
				onChange={onMessageChange}
				value={props.newMassageText} />
				<button onClick={ addMessage }>add message</button>
			</div>

		</div>
	)
}

export default Dialogs;