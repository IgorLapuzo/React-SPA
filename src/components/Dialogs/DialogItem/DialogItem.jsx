import React from 'react'
import { NavLink } from 'react-router-dom';
import clases from './../Dialogs.module.css';

const DialogItem = (props) => {
	let path = "/dialogs/"+ props.id;
	return ( 
		<div className={clases.name}>
					<NavLink to = {path} className = {navData => navData.isActive ? clases.active : clases.passive}>{props.name}</NavLink>
				</div>
	)
}

export default DialogItem;