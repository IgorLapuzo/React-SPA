import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus } from '../../redux/ProfileReducer';
import { withAuthNavigate } from '../hoc/withAuthNavigate';
import { compose } from 'redux';
import { withRouter } from '../hoc/withRouter';

class ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = this.props.authorizedUserId
		}
		this.props.getUserProfile(userId);
		this.props.getStatus(userId); 
	}

	render() {
		return (
			<Profile {...this.props} 
			profile = {this.props.profile} 
			status = {this.props.status} 
			updateStatus = {this.props.updateStatus} />
		)
	};
}

let mapStateToProps = (state) => ({
	
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	authorizedUserId: state.auth.userId,
	isAuth: state.auth.isAuth,
})	


export default compose (
	connect (mapStateToProps, {getUserProfile, getStatus, updateStatus}),
	withRouter,
	//withAuthNavigate
) (ProfileContainer)