let initialState = {
	users: [],
	pagesSize: 10,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
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
			return { ...state, users: action.users }
		}
		case 'SET-CURRENT-PAGE': {
			return { ...state, currentPage: action.currentPage}
		}
		case 'SET-TOTAL-COUNT': {
			return { ...state, totalUsersCount: action.totalUsersCount}
		}
		case 'TOGGLE-IS-FETCHING': {
			return { ...state, isFetching: action.isFetching}
		}
		default: 
			return state;
	};
}; 

export const follow = (userId) => ({ type: 'FOLLOW', userId });
export const unfollow = (userId) => ({ type: 'UNFOLLOW', userId});
export const setUsers = (users) => ({ type: 'SET-USERS', users});
export const setCurrentPage = (currentPage) => ({ type: 'SET-CURRENT-PAGE', currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({ type: 'SET-TOTAL-COUNT', totalUsersCount});
export const setToggleFetching = (isFetching) => ({ type: 'TOGGLE-IS-FETCHING', isFetching});

export default usersReducer;