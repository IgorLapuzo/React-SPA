let initialState = {
	users: [
		//{id: 1, followed: true, photoURL: 'https://as2.ftcdn.net/v2/jpg/01/88/16/11/1000_F_188161181_ECXsk62DZLJR611UniB6oScNJsyZVEdZ.jpg', firstName: 'Sasha', status: 'Hi everyone', location: {cityName: 'Minsk', country: 'Belarus'}},
		//{id: 2, followed: false, photoURL: 'https://as2.ftcdn.net/v2/jpg/01/88/16/11/1000_F_188161181_ECXsk62DZLJR611UniB6oScNJsyZVEdZ.jpg', firstName: 'Petia', status: 'I\'m Boss', location: {cityName: 'Vitebsk', country: 'Belarus'}},
		//{id: 3, followed: true, photoURL: 'https://as2.ftcdn.net/v2/jpg/01/88/16/11/1000_F_188161181_ECXsk62DZLJR611UniB6oScNJsyZVEdZ.jpg', firstName: 'Valera', status: 'What a wonderful day!', location: {cityName: 'Brest', country: 'Belarus'}},
	]
};



const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FOLLOW': {
			return {
				...state,
				users: state.users.map( u => {
					if (u.id === action.userId) {
						return {...u, followed: true}
					}
					return u;
				})
			};
		}
		case 'UNFOLLOW': {
			return {
				...state,
				users: state.users.map( u => {
					if (u.id === action.userId) {
						return {...u, followed: false}
					}
					return u;
				})
				
			};
		}
		case 'SET-USERS': {
			return { ...state, users: [ ...state.users, ...action.users ]}
		}
		default: 
			return state;
	};
}; 

export const followAC = (userId) => ({ type: 'FOLLOW', userId });
export const unfollowAC = (userId) => ({ type: 'UNFOLLOW', userId});
export const setUsersAC = (users) => ({ type: 'SET-USERS', users});

export default usersReducer;