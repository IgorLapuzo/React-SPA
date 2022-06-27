import React from 'react';
import MyPosts from './MyPosts';
import {addPostActionCreator, newPostElementActionCreator } from '../../../redux/ProfileReducer'


const MyPostsContainer = (props) => {

	let state = props.store.getState();

	let onAddPost = () => {props.store.dispatch (addPostActionCreator())}; 
	
	let onPostChange = (text) => {
		let action = newPostElementActionCreator(text)
		props.store.dispatch (action);		
	};

	return (
		<MyPosts updateNewPostText = { onPostChange } addPost = { onAddPost } 
		profilePage = {state.profilePage} />
	)
};

export default MyPostsContainer;