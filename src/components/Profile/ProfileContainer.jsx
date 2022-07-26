import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/ProfileReducer';
import { useParams } from "react-router-dom";
import { Navigate } from 'react-router-dom';



class ProfileContainer extends React.Component {

	componentDidMount() {
		
		let userId = this.props.params.userId;
		if (!userId) {
			userId = 24914
		};
		this.props.getUserProfile(userId);
	}
 
	render() {
		if (!this.props.isAuth) {
			return <Navigate to = {'/login'} />
		}
		return (
			<Profile {...this.props} profile = {this.props.profile} />
		)
	};
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	isAuth: state.auth.isAuth
})	

const TakeParams = (props) => {
	return <ProfileContainer {...props} params = {useParams()} />
}


export default connect (mapStateToProps, {getUserProfile}) (TakeParams);