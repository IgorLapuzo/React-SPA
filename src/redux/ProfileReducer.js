let initialState = {
	postsData: [
		{ id: 1, post: "It's my first post", likescount: 23 },
		{ id: 2, post: "Hi, how are you?", likescount: 18 },
		{ id: 3, post: "Hi", likescount: 10 },
		{ id: 4, post: "Hello", likescount: 50 },
	],
	newPostText: '',
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD-POST':
			let newPost = {
				id: 5,
				post: state.newPostText,
				likescount: 0,
			};
			state.postsData.push(newPost);
			state.newPostText = '';
			return state;
		case 'UPDATE-NEW-POST-TEXT':
			state.newPostText = action.newText;
			return state;
		default: 
			return state;
	};
}; 

export const addPostActionCreator = () => {
	return {
		type: 'ADD-POST'
	}
};

export const newPostElementActionCreator = (text) => {
	return {
		type: 'UPDATE-NEW-POST-TEXT', newText: text
	}
};

export default profileReducer;