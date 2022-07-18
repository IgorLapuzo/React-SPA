import React from 'react';
import Header from './Header';
import {setAuthUserData} from '../../redux/AuthReducer';
import {connect} from 'react-redux';
import { authAPI } from '../../api/api';
 

class HeaderContainer extends React.Component {

	componentDidMount() {
		authAPI.me()
			.then (response => {
				if (response.data.resultCode === 0) {
					let {Id, email, login} = response.data.data;
					this.props.setAuthUserData(Id, email, login);
				}
		});	
	}

	render() {
		return <Header {...this.props} />
	}
};

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
})

export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer) ;