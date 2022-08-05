import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { required } from '../../utils/validators';
import { Input } from '../Common/FormsControls/FormsControls';
import { login } from '../../redux/AuthReducer';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import clases from './../Common/FormsControls/FormsControls.module.css'
import styles from './Login.module.css'

const LoginForm = (props) => {
	return (
		<div className={styles.formWraper}>
			<form onSubmit = {props.handleSubmit}>
				<div>
					<Field className={styles.email} placeholder = {'Email'} name = {'email'} 
					validate = {[required]}
					component = {Input} />
				</div>
				<div>
					<Field className={styles.password} placeholder = {'Password'} name = {'password'} 
					validate = {[required]}
					component = {Input}
					type = {'password'} />
				</div>
				<div className={styles.rememberWraper}>
					<Field component = {Input} name = {'rememberMe'} type = {'checkbox'} /> remember me
				</div>
				{ props.error && <div className = {clases.formError}>
					{props.error}
				</div> 
				}
				<div>
					<button className={styles.button}>Login</button>
				</div>
			</form>
		</div>
		
	)
}	 

const LoginReduxForm = reduxForm({form: 'login'}) (LoginForm)

const Login = (props) => {
	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe);
	}

	if (props.isAuth) {
		return <Navigate to = {'/profile/24914'}/>
	}

	return <div className={styles.wraper}>
		<div className={styles.body}>
			<h2 className={styles.title}>Login</h2>
			<LoginReduxForm onSubmit = {onSubmit}/>
			<p>Test account: free@samuraijs.com</p>
			<p>Password: free</p>
		</div>
	</div>
}

export default connect (null, {login} ) (Login);