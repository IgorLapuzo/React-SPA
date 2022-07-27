import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, getUsers } from '../../redux/UsersReducer';
import Users from './Users';
import Preloader from './../Common/Preloader/Preloader'
import { withAuthNavigate } from '../hoc/withAuthNavigate';
import { compose } from 'redux';



class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pagesSize);	
	}
 
	onPageChanged = (pageNumber) => {
		this.props.getUsers(pageNumber, this.props.pagesSize);	
	}

	render() {
		
		return <>
			{ this.props.isFetching ? <Preloader /> : null }
			<Users totalUsersCount = {this.props.totalUsersCount}
				pagesSize = {this.props.pagesSize}
				currentPage = {this.props.currentPage}
				onPageChanged = {this.onPageChanged}
				users =  {this.props.users}
				follow = {this.props.follow}
				unfollow = {this.props.unfollow}
				followingInProgress = {this.props.followingInProgress}
			/>
		</>	
	}
}

let mapStateToProps = (state) => {

	return {
		users: state.usersPage.users,
		pagesSize: state.usersPage.pagesSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress,
	}
}




export default compose (
	//withAuthNavigate,
	connect (mapStateToProps, {follow, unfollow, setCurrentPage, getUsers})
) (UsersContainer)