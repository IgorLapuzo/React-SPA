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

export const followAC = (userId) => ({ type: 'FOLLOW', userId });
export const unfollowAC = (userId) => ({ type: 'UNFOLLOW', userId});
export const setUsersAC = (users) => ({ type: 'SET-USERS', users});
export const setCurrentPageAC = (currentPage) => ({ type: 'SET-CURRENT-PAGE', currentPage});
export const setTotalUsersCountAC = (totalUsersCount) => ({ type: 'SET-TOTAL-COUNT', totalUsersCount});
export const setToggleFetchingAC = (isFetching) => ({ type: 'TOGGLE-IS-FETCHING', isFetching});

export default usersReducer;