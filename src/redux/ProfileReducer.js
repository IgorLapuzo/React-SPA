let initialState = {
	postsData: [
		{ id: 1, post: "Hi!!! It's my first post", likescount: 23 },
		{ id: 2, post: "I'm particularly keen on Java Script", likescount: 18 },
	],
	newPostText: '',
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD-POST': {
			let newPost = {
				id: 3,
				post: state.newPostText,
				likescount: 0,
			};
			let stateCopy = {...state};
			stateCopy.postsData = [...state.postsData]
			stateCopy.postsData.push(newPost);
			stateCopy.newPostText = '';
			return stateCopy;
		}
		case 'UPDATE-NEW-POST-TEXT': {
			let stateCopy = {...state};
			stateCopy.newPostText = action.newText;
			return stateCopy;
		}
		default: 
			return state;
	};
}; 

export const addPostActionCreator = () => ({ type: 'ADD-POST' });
export const newPostElementActionCreator = (text) => ({ type: 'UPDATE-NEW-POST-TEXT', newText: text});
export default profileReducer;