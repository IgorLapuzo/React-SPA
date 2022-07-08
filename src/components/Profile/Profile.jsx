import React from 'react';
import clases from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = () => {
	return <div className={clases.content}>
		<ProfileInfo />
		<MyPostsContainer />
	</div>
};

export default Profile;