import React from 'react'
import clases from './Users.module.css';

const Users = (props) => {

	return <div>
		{
			props.users.map( u => <div key = {u.id}>
				<div className = {clases.userWrapper}>
					<div className = {clases.bodyItem}>
						<div className = {clases.bodyWrapper}>
							<div className = {clases.logoArea}>
								<img className = {clases.img} src = {u.photoURL} />
								<div>
									{ u.followed 
									? <button onClick = { () => {props.unfollow(u.id)} } className = {clases.button}>Unfollow</button> 
									: <button onClick = { () => {props.follow(u.id)} } className = {clases.button}>Follow</button>}
								</div>	
							</div>
							<div className = {clases.descriptionWraper}>
								<div className = {clases.description}>
									<div className = {clases.name}> {u.firstName} </div>
									<div className = {clases.status}> {u.status} </div>
								</div>
								<div className = {clases.location}>
									<div> {u.location.country} </div>
									<div> {u.location.cityName} </div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>)
		}
	</div>
};

export default Users;