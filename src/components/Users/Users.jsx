import * as axios from 'axios';
import React from 'react'
import clases from './Users.module.css';
import userNoLogo from './../../userNoLogo.jpg'

class Users extends React.Component {

	constructor(props) {
		
		super(props);
		
		if (props.users.length === 0) {
			axios.get('https://social-network.samuraijs.com/api/1.0/users')
			.then (response => {
				this.props.setUsers (response.data.items);
			});
		}		
	}

	render() {
		return <div>
			{
				this.props.users.map( u => <div key = {u.id}>
					<div className = {clases.userWrapper}>
						<div className = {clases.bodyItem}>
							<div className = {clases.bodyWrapper}>
								<div className = {clases.logoArea}>
								<img className = {clases.img} src = { u.photos.small != null ? u.photos.small : userNoLogo} />
									<div>
										{ u.followed 
										? <button onClick = { () => {this.props.unfollow(u.id)} } className = {clases.button}>Unfollow</button> 
										: <button onClick = { () => {this.props.follow(u.id)} } className = {clases.button}>Follow</button>}
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
	}
}

export default Users;