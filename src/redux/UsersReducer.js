import { userAPI } from '../api/api';
import { updateObjectInArray } from '../utils/object-helpers'

let initialState = {
	users: [],
	pagesSize: 10,
	totalItemsCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FOLLOW': {
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
			};
		}
		case 'UNFOLLOW': {
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
			};
		}
		case 'SET-USERS': {
			return { ...state, users: action.users }
		}
		case 'SET-CURRENT-PAGE': {
			return { ...state, currentPage: action.currentPage}
		}
		case 'SET-TOTAL-COUNT': {
			return { ...state, totalItemsCount: action.totalItemsCount}
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
export const setTotalItemsCount = (totalItemsCount) => ({ type: 'SET-TOTAL-COUNT', totalItemsCount});
export const setToggleFetching = (isFetching) => ({ type: 'TOGGLE-IS-FETCHING', isFetching});
export const toggleFollowingProgress = (isFetching,  userId) => ({ type: 'TOGGLE-IS-FOLLOWING-PROGRESS', isFetching, userId});

export const getUsers = (page, pagesSize) => {
	return async (dispatch) => {
		dispatch(setToggleFetching(true));
		dispatch(setCurrentPage(page))
		let data = await userAPI.getUsers(page, pagesSize)
		dispatch(setToggleFetching(false));
		dispatch(setUsers(data.items));
		dispatch(setTotalItemsCount(data.totalCount));
	}
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
	dispatch(toggleFollowingProgress(true, userId))
		let response = await apiMethod(userId)
		if (response.data.resultCode === 0) {
			dispatch(actionCreator(userId));
		}
		dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId) => {
	return async (dispatch) => {
		followUnfollowFlow(dispatch, userId, userAPI.follow.bind(userAPI), followSuccess) 
	}
}

export const unfollow = (userId) => {
	return async (dispatch) => {
		followUnfollowFlow(dispatch, userId, userAPI.unfollow.bind(userAPI), unfollowSuccess)
	}
}

export default usersReducer;