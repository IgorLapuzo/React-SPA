let initialState = {
	messages: [
		{ id: 1, message: 'Привет' },
		{ id: 2, message: 'Как дела?' },
		{ id: 3, message: 'Идем в кино' },
		{ id: 4, message: 'Что делать?' },
	],
	newDialogMessage: '',
	dialogs: [
		{ id: 1, name: 'Ира' },
		{ id: 2, name: 'Петя' },
		{ id: 3, name: 'Вася' },
		{ id: 4, name: 'Саша' },
	],
};

const dialogsReducer = (state = initialState, action) => {
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