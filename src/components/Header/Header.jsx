import React from 'react';
import clases from './Header.module.css';
import logo from '../../logo.png';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
	return <header className={clases.header}>
		<div className = {clases.container}>
			<img src = { logo } alt = 'no img'></img>
			<div className = {clases.buttonWraper}>
				<button className = {clases.buttonLeft}>Register</button>
				{props.isAuth ? props.login : 
					<NavLink to = {'/login'}>
						<button className = {clases.buttonRight}>LogIn</button>
					</NavLink>
				}
			</div>	
		</div>
		
 	</header>
};

export default Header;