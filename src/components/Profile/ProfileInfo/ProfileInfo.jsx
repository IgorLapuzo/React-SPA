import React from 'react';
import clases from './ProfileInfo.module.css';
import back from '../../../back.jpg';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {

	if (!props.profile) {
		return <Preloader />
	}

	debugger;

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
					<div className = {clases.title}>{ props.profile.fullName }</div>
					<ProfileStatusWithHooks status = {props.status} updateStatus = {props.updateStatus} />
					<div className = {clases.description}>{ props.profile.aboutMe }FrontEnd Developer</div>
					<div className = {clases.location}>Vitebsk, Belarus</div>
					<div className = {clases.contactInfo}>Contact info: &nbsp;
					<a href='https://www.linkedin.com/in/igorlapuzo/'>LinkedIn</a>
					</div>
					<div className = {clases.interests}>{ props.profile.aboutMe } Interests: Development, English, Jogging</div> 																
				</div>
			</div>
		</div>
	</div>	
	)
};

export default ProfileInfo;