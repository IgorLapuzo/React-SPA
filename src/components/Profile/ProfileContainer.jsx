import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/ProfileReducer';
import { useParams } from "react-router-dom";
import { userAPI } from '../../api/api';


class ProfileContainer extends React.Component {

	componentDidMount() {
		debugger;
		let userId = this.props.params.userId;
		if (!userId) {userId = 24914};
		userAPI.getProfile(userId)
		.then (response => {
			this.props.setUserProfile (response.data);
	})
	}
 
	render() {
		return (
			<Profile {...this.props} profile = {this.props.profile} />
		)
	};
}

let mapStateToProps = (state) => {
	return ({profile: state.profilePage.profile})
}	

const TakeParams = (props) => {
	return <ProfileContainer {...props} params = {useParams()} />
}

export default connect (mapStateToProps, {setUserProfile}) (TakeParams);