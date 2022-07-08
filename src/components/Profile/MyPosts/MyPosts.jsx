import React from 'react';
import clases from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	
	let postElements = props.postsData.map( post => <Post message = {post.post} likes = {post.likescount} /> );

	let onAddPost = () => props.addPost(); 

	let onPostChange = (e) => {
		let text = e.target.value;
		props.updateNewPostText(text);		
	};

	return (
		<div className = {clases.postBlock}>	 
			<div className = {clases.title}>My posts</div>
			{ postElements }
			<div className = {clases.myPostsWraper}>
				<div className = {clases.inputWraper}>
					<textarea className = {clases.input} onChange = { onPostChange } 
					value = {props.newPostText} />
				</div>
				<div className = {clases.buttonWrapper}>
					<button className = {clases.button} onClick={ onAddPost }>Add post</button>
				</div>			
			</div>
		</div> 
	);
};

export default MyPosts;