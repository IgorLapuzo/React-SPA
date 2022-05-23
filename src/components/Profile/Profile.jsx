import React from 'react';
import clases from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {
	return <div className={clases.content}>
		<ProfileInfo />
		<MyPosts postsData={props.profilePage.postsData} 
		dispatch = {props.dispatch} />
	</div>
}

export default Profile;