let initialState = {
	messages: [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'How are you?' },
		{ id: 3, message: 'Let\'s go to the cinema' },
		{ id: 4, message: 'What are you doing?' },
	],
	newDialogMessage: '',
	dialogs: [
		{ id: 1, name: 'Ira' },
		{ id: 2, name: 'Den' },
		{ id: 3, name: 'Bill' },
		{ id: 4, name: 'Sarah' },
	],
};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD-MESSAGE':
			let message = state.newDialogMessage
			state.newDialogMessage = '';
			let newMessage = {id: 5, message: message,};
			state.messages.push(newMessage)			
			return state;
		case 'UPDATE-NEW-MESSAGE-TEXT':
			state.newDialogMessage = action.message;
			return state;
		default: 
			return state;
	};
};

export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'});
export const newMessageElementActionCreator = (body) => ({type: 'UPDATE-NEW-MESSAGE-TEXT', message: body});
export default dialogsReducer;