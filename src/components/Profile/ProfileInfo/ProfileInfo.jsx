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
				<div>description</div>
			</div>
		</div>
	</div>	
	)
}

export default ProfileInfo;