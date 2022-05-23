import React from 'react';
import clases from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

	let newPostElement = React.createRef ();

	let addPost = () => {
		//props.addPost();
		props.dispatch ( { type: 'ADD-POST'});
	};

	let postElements = props.postsData.map( post => <Post message = {post.post} likes = {post.likescount} /> );

	let onPostChange = () => {
		let text = newPostElement.current.value;
		//props.updateNewPostText (text);
		props.dispatch ({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
	};

	return <div className={clases.postBlock}>	 
		<div>My posts</div>
		<div>
			<div>
				<textarea onChange={onPostChange}
				ref={newPostElement} 
				value={props.newPostText} />
			</div>
			<div>
				<button onClick={ addPost }>Add post</button>
			</div>			
		</div>
		<div>New post</div>
		{ postElements }
	 </div> 

}

export default MyPosts;