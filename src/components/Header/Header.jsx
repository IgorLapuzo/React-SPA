import React from 'react';
import clases from './Header.module.css';
import logo from '../../logo.png';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
	return <header className={clases.header}>
		<div className = {clases.container}>
			<img src = { logo } alt = 'no img'></img>
			<div className = {clases.buttonWraper}>
				{props.isAuth 
					? <div>{props.login} <button onClick = {props.logout} className = {clases.button}>LogOut</button></div> : 
					<NavLink to = {'/login'}>
						<button className = {clases.button}>LogIn</button>
					</NavLink>
				}
			</div>	
		</div>
		
 	</header>
};

export default Header;