import React from "react";
import Paginator from '../Common/Paginator/Paginator'
import User from './User'
import clases from './Users.module.css';



let Users = ({ currentPage, totalItemsCount, pagesSize, onPageChanged, users, ...props }) => {
	
	return (
		<div>
			<div className = {clases.paginatorWraper}>
				<Paginator
					currentPage={currentPage}
					onPageChanged={onPageChanged}
					totalItemsCount={totalItemsCount}
					pagesSize={pagesSize}
				/>
			</div>
			
			{
				users.map(u => <User user={u}
					followingInProgress={props.followingInProgress}
					key={u.id}
					unfollow={props.unfollow}
					follow={props.follow}
				/>)

			}
		</div>
	)
}

export default Users;