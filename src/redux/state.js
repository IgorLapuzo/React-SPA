let store = {
	_state: {
		profilePage: {
			postsData: [
				{ id: 1, post: "It's my first post", likescount: 23 },
				{ id: 2, post: "Hi, how are you?", likescount: 18 },
				{ id: 3, post: "Hi", likescount: 10 },
				{ id: 4, post: "Hello", likescount: 50 },
			],
			newPostText: '',
		},
		dialogsPage: {
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
			]
		}
	},
	_callSubscriber() {
		console.log ('State changed')
	},
	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
	addPost() {
		
	},
	updateNewPostText(newText) {
		
	},
	addMessage() {
		let newMessage = {
			id: 4,
			message: this._state.dialogsPage.newDialogMessage,
		};
		this._state.dialogsPage.messages.push(newMessage)
		this._state.dialogsPage.newDialogMessage = '';
		this._callSubscriber(this._state);
	},
	updateNewMessage(newMessageText) {
		this._state.dialogsPage.newDialogMessage = newMessageText;
		this._callSubscriber(this._state);
	},
	dispatch(action) {
		if (action.type === 'ADD-POST') {
			let newPost = {
				id: 5,
				post: this._state.profilePage.newPostText,
				likescount: 0,
			};
			this._state.profilePage.postsData.push(newPost);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);
		} else if (action.type === 'UPDATE-NEW-POST-TEXT') {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		}
	}
	
};

export const addPostActionCreator = ()  => {
	return {
		type: 'ADD-POST'
	}
};

export const newPostElementActionCreator = (text) => {
	return {
		type: 'UPDATE-NEW-POST-TEXT', newText: text
	}
};



export default store;
window.store = store;