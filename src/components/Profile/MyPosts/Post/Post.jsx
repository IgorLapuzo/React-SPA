import React from 'react';
import clases from './Post.module.css';
import userNoLogo from '../../../../userNoLogo.jpg'

const Post = (props) => {
	return <div className={clases.post}>
		<div className = {clases.wraper}>
			<img src = {userNoLogo} />
			<div className = {clases.postBody}>{props.message}</div>
		</div>
		
		<div className = {clases.likes}>likes {props.likes}</div>
	</div> 
};

export default Post;