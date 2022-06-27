import React from 'react';
import clases from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
	
	let postElements = props.profilePage.postsData.map( post => <Post message = {post.post} likes = {post.likescount} /> );

	let onAddPost = () => props.addPost(); 

	let onPostChange = (e) => {
		let text = e.target.value;
		props.updateNewPostText(text);		
	};
	debugger;
	return (
		<div className={clases.postBlock}>	 
			<div>My posts</div>
			<div>
				<div>
					<textarea onChange={ onPostChange } 
					value={props.profilePage.newPostText} />
				</div>
				<div>
					<button onClick={ onAddPost }>Add post</button>
				</div>			
			</div>
			<div>New post</div>
			{ postElements }
		</div> 
	);
};

export default MyPosts;