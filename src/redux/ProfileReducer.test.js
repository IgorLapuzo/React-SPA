import profileReducer, {addPostActionCreator, deletePost} from './ProfileReducer';
import React from 'react';
import { ReactDOM } from 'react';

let state = {
	postsData: [
		{ id: 1, post: "Hi!!! It's my first post", likescount: 23 },
		{ id: 2, post: "I'm particularly keen on Java Script", likescount: 18 },
	],
};

it('length of posts should be incremented', () => {
	
	//1. test data
	let action = addPostActionCreator('hi');
	
	//2. action
	let newState = profileReducer(state, action);

	//3.expectation
	expect(newState.postsData.length).toBe(3)
});

it('after deleting length of messages should be decrement', () => {
	
	//1. test data
	let action = deletePost(1);
	
	//2. action
	let newState = profileReducer(state, action);

	//3.expectation
	expect(newState.postsData.length).toBe(1)
});