import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { required } from '../../utils/validators';
import { Input } from '../Common/FormsControls/FormsControls';
import { login } from '../../redux/AuthReducer';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import clases from './../Common/FormsControls/FormsControls.module.css'

const LoginForm = (props) => {
	return (
		<form onSubmit = {props.handleSubmit}>
			<div>
				<Field placeholder = {'Email'} name = {'email'} 
				validate = {[required]}
				component = {Input} />
			</div>
			<div>
				<Field placeholder = {'Password'} name = {'password'} 
				validate = {[required]}
				component = {Input}
				type = {'password'} />
			</div>
			<div>
				<Field component = {Input} name = {'rememberMe'} type = {'checkbox'} /> remember me
			</div>
			{ props.error && <div className = {clases.formError}>
				{props.error}
			</div> 
			}
			<div>
				<button>Login</button>
			</div>
		</form>
	)
}	 

const LoginReduxForm = reduxForm({form: 'login'}) (LoginForm)

const Login = (props) => {
	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe);
	}

	if (props.isAuth) {
		return <Navigate to = {'/profile'}/>
	}

	return <div>
		<h1>Login</h1>
		<LoginReduxForm onSubmit = {onSubmit}/>
	</div>
}

export default connect (null, {login} ) (Login);