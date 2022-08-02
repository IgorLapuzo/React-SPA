import React from "react";
import clases from './Paginator.module.css';

let Paginator = (props) => {
	let pagesCount = Math.ceil (props.totalUsersCount / props.pagesSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	};

	return (
		<div>
			{pages.map(p => {
				return <span className={props.currentPage === p && clases.selectedPage}
					onClick={(e) => {
						props.onPageChanged(p);
					}}>{p}</span>
			})}
		</div>
	)	
}			

export default Paginator;