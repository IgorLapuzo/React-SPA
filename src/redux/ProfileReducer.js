let initialState = {
	postsData: [
		{ id: 1, post: "Hi!!! It's my first post", likescount: 23 },
		{ id: 2, post: "I'm particularly keen on Java Script", likescount: 18 },
	],
	newPostText: '',
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD-POST':
			let newPost = {
				id: 3,
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

export const addPostActionCreator = () => ({ type: 'ADD-POST' });
export const newPostElementActionCreator = (text) => ({ type: 'UPDATE-NEW-POST-TEXT', newText: text});
export default profileReducer;