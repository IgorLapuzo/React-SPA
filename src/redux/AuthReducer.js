import { authAPI } from '../api/api';

let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET-USER-DATA': {
			return {
				...state,
				...action.data,
				isAuth: true,
			};
		}
		default:
			return state;
	};
}; 

export const setAuthUserData = (userId, email, login) => ({ type: 'SET-USER-DATA', data: {userId, email, login} });
export const getAuthUserData = () => (dispatch) => {
	authAPI.me()
			.then (response => {
				if (response.data.resultCode === 0) {
					let {Id, email, login} = response.data.data;
					dispatch (setAuthUserData(Id, email, login));
				}
			});	
}

export default authReducer;