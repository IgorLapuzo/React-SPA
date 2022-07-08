import React from 'react';
import MyPosts from './MyPosts';
import {addPostActionCreator, newPostElementActionCreator } from '../../../redux/ProfileReducer'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
	return {
		postsData: state.profilePage.postsData,
		newPostText: state.profilePage.newPostText,
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
		updateNewPostText: (text) => {
			dispatch (newPostElementActionCreator(text))
		},
		addPost: () => {
			dispatch (addPostActionCreator())	
		},
	}
};

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;


/*
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
*/