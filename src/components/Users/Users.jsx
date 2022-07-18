import React from "react";
import clases from './Users.module.css';
import userNoLogo from './../../userNoLogo.jpg'
import { NavLink } from "react-router-dom";


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
										<img className = {clases.img} src = { u.photos.small != null ? u.photos.small : userNoLogo} alt = 'no img'/>
									</NavLink>		
									<div>
										{ u.followed 
											? <button className = {clases.button}
												disabled = {props.followingInProgress
												.some (id => id === u.id)}
													onClick = {() => {props.unfollow(u.id)}}>
												Unfollow</button> 

											: <button className = {clases.button}
											 disabled = {props.followingInProgress
												.some (id => id === u.id)}
													onClick = {() => {props.follow(u.id)}}>
												Follow</button>	}
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