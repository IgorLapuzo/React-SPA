import dialogsReducer from "./DialogsReducer";
import profileReducer from "./ProfileReducer";

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
			],
		},
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
	
	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._callSubscriber(this._state);
	}
};

export default store;
window.store = store;

