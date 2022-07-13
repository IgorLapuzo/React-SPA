import React from 'react';
import clases from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
	return <div className={clases.content}>
		<ProfileInfo profile = {props.profile}/>
		<MyPostsContainer />
	</div>
};

export default Profile;