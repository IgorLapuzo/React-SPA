import React from "react";
import clases from './Users.module.css';
import userNoLogo from './../../userNoLogo.jpg'
import { NavLink } from "react-router-dom";




let User = ({ user, followingInProgress, unfollow, follow }) => {
	return (
		<div >
			<div className={clases.userWrapper}>
				<div className={clases.bodyItem}>
					<div className={clases.bodyWrapper}>
						<div className={clases.logoArea}>
							<NavLink to={'/profile/' + user.id}>
								<img className={clases.img} src={user.photos.small != null ? user.photos.small : userNoLogo} alt='no img' />
							</NavLink>
							<div>
								{user.followed
									? <button className={clases.button}
										disabled={followingInProgress
											.some(id => id === user.id)}
										onClick={() => { unfollow(user.id) }}>
										Unfollow</button>

									: <button className={clases.button}
										disabled={followingInProgress
											.some(id => id === user.id)}
										onClick={() => { follow(user.id) }}>
										Follow</button>}
							</div>
						</div>
						<div className={clases.descriptionWraper}>
							<div className={clases.description}>
								<div className={clases.name}> {user.name} </div>
								<div className={clases.status}> {user.status} </div>
							</div>
							<div className={clases.location}>
								<div> {"user.location.country"} </div>
								<div> {"user.location.cityName"} </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}

export default User;