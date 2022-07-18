import { userAPI } from '../api/api';

let initialState = {
	users: [],
	pagesSize: 10,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: [],
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
		case 'TOGGLE-IS-FOLLOWING-PROGRESS': {
			return { ...state, followingInProgress: action.isFetching
				? [...state.followingInProgress, action.userId]
				: state.followingInProgress.filter(id => id !== action.userId)
			}
		} 
		default: 
			return state;
	};
}; 

export const followSuccess = (userId) => ({ type: 'FOLLOW', userId });
export const unfollowSuccess = (userId) => ({ type: 'UNFOLLOW', userId});
export const setUsers = (users) => ({ type: 'SET-USERS', users});
export const setCurrentPage = (currentPage) => ({ type: 'SET-CURRENT-PAGE', currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({ type: 'SET-TOTAL-COUNT', totalUsersCount});
export const setToggleFetching = (isFetching) => ({ type: 'TOGGLE-IS-FETCHING', isFetching});
export const toggleFolowingProgress = (isFetching,  userId) => ({ type: 'TOGGLE-IS-FOLLOWING-PROGRESS', isFetching, userId});

export const getUsers = (currentPage, pagesSize) => {
	return (dispatch) => {
		dispatch(setToggleFetching(true));
			userAPI.getUsers(currentPage, pagesSize)
			.then (data => {
				dispatch(setToggleFetching(false));
				dispatch(setUsers (data.items));
				dispatch(setTotalUsersCount (data.totalCount));
		});
	}
}

export const follow = (userId) => {
	return (dispatch) => {
		dispatch(toggleFolowingProgress (true, userId))
		userAPI.follow(userId)
			.then(response => {
				if (response.data.resultCole === 0) {
					dispatch.followSuccess(userId)
				}
				dispatch(toggleFolowingProgress (false, userId))
		});
	}
}

export const unfollow = (userId) => {
	return (dispatch) => {
		dispatch(toggleFolowingProgress (true, userId))
		userAPI.unfollow(userId)
			.then(response => {
				if (response.data.resultCole === 0) {
					dispatch.unfollowSuccess(userId)
				}
				dispatch(toggleFolowingProgress (false, userId))
		});
	}
}

export default usersReducer;