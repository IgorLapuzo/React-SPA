import React from 'react';
import clases from './ProfileInfo.module.css';
import back from '../../../back.jpg';
import ava from '../../../ava.JPG';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {

	if (!props.profile) {
		return <Preloader />
	}

	return (
	<div className={clases.userInfo}>
		<div className={clases.background}>
			<img src = { back } ></img>
		</div>
		<div>
			<div className={clases.descriptionBlock}>
				<div>
					
					<img src = { props.profile.photos.large } />
				</div>
				<div className = {clases.infoSectionWraper}>
					<div className = {clases.title}>Igor Lapuzo</div>
					<ProfileStatus status = {props.status} updateStatus = {props.updateStatus} />
					<div className = {clases.description}>FrontEnd Developer | Java Script | React | Redux</div>
					<div className = {clases.location}>Vitebsk, Belarus</div>
					<div className = {clases.contactInfo}>Contact info: &nbsp;
					<a href='https://www.linkedin.com/in/igorlapuzo/' target="_blank">LinkedIn</a>
					</div>
					<div className = {clases.interests}>Interests: Development, English, Jogging</div> 																
				</div>
			</div>
		</div>
	</div>	
	)
};

export default ProfileInfo;