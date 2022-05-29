const dialogsReducer = (state, action) => {
	switch (action.type) {
		case 'ADD-MESSAGE':
			let newMessage = {
				id: 5,
				message: state.newDialogMessage,
			};
			state.messages.push(newMessage)
			state.newDialogMessage = '';
			return state;
		case 'UPDATE-NEW-MESSAGE-TEXT':
			state.newDialogMessage = action.newMessage;
			return state;
		default: 
			return state;
	};
};

export const addMessageActionCreator = () => {
	return {
		type: 'ADD-MESSAGE'
	}
};

export const newMessageElementActionCreator = (message) => {
	return {
		type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: message
	}
};

export default dialogsReducer;