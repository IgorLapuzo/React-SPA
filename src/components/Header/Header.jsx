import React from 'react';
import clases from './Header.module.css';
import logo from '../../logo.png';

const Header = () => {
	return <header className={clases.header}>
		<div className = {clases.container}>
			<img src = { logo }></img>
			<div className = {clases.buttonWraper}>
				<button className = {clases.buttonLeft}>Register</button>
				<button className = {clases.buttonRight}>Sign In</button>
			</div>	
		</div>
		
 	</header>
};

export default Header;