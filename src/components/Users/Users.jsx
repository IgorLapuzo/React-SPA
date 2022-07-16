import React from "react";
import clases from './Users.module.css';
import userNoLogo from './../../userNoLogo.jpg'
import { NavLink } from "react-router-dom";
import * as axios from 'axios';

let Users = (props) => {
	let pagesCount = Math.ceil (props.totalUsersCount / props.pagesSize);
		let pages = [];
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i);
		};
	return (
		<div>
			<div>
				{ pages.map( p => {
					return <span className = { props.currentPage === p && clases.selectedPage }
					onClick = { () => { props.onPageChanged(p) }}>{p}</span>
				})}
			</div>
			{
				props.users.map( u => <div key = {u.id}>
					<div className = {clases.userWrapper}>
						<div className = {clases.bodyItem}>
							<div className = {clases.bodyWrapper}>
								<div className = {clases.logoArea}>
									<NavLink to = {'/profile/' + u.id}>
										<img className = {clases.img} src = { u.photos.small != null ? u.photos.small : userNoLogo} />
									</NavLink>		
									<div>
										{ u.followed 
											? <button onClick = { () => {
											axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{ 
												withCredentials: true, 
												headers: { "API-KEY": "a44b13c6-81f9-404f-b19f-8f5154fea008"} 
											})
													.then(response => {
														if (response.data.resultCole === 0) {
															props.unfollow(u.id)
														}
													})}} className = {clases.button}>Unfollow</button> 

											: <button onClick = { () => {	
											axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, { 
												withCredentials: true, 
												headers: { "API-KEY": "a44b13c6-81f9-404f-b19f-8f5154fea008"} 
											})
													.then(response => {
														if (response.data.resultCole === 0) {
															props.follow(u.id)
														}
													})}} className = {clases.button}>Follow</button>}
									</div>	
								</div>
								<div className = {clases.descriptionWraper}>
									<div className = {clases.description}>
										<div className = {clases.name}> {u.name} </div>
										<div className = {clases.status}> {u.status} </div>
									</div>
									<div className = {clases.location}>
										<div> {"u.location.country"} </div>
										<div> {"u.location.cityName"} </div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>)
			}
		</div>
	)
}

export default Users;