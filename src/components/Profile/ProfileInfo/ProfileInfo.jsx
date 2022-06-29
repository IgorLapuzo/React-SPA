import React from 'react';
import clases from './ProfileInfo.module.css';
import back from '../../../back.jpg';
import ava from '../../../ava.JPG';

const ProfileInfo = () => {
	return (
	<div className={clases.userInfo}>
		<div className={clases.background}>
			<img src = { back } ></img>
		</div>
		<div>
			<div className={clases.descriptionBlock}>
				<div>
					<img src = { ava } ></img>
				</div>
				<div className = {clases.infoSectionWraper}>
					<div className = {clases.title}>Igor Lapuzo</div>
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