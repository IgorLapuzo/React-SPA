import React from 'react';
import clases from './ProfileInfo.module.css';


const ProfileInfo = () => {
	return <div className={clases.UserInfo}>
		<img src='https://thumbs.dreamstime.com/b/%D0%BC%D0%BE%D1%80%D0%B5-%D0%BE%D0%BA%D0%B5%D0%B0%D0%BD-%D0%BF%D0%BB%D1%8F%D0%B6-%D0%B7%D0%B0%D0%BA%D0%B0%D1%82-%D1%81%D0%BE%D0%BB%D0%BD%D1%86%D0%B5-%D0%B2%D0%BE%D1%81%D1%85%D0%BE%D0%B4-%D0%B2%D0%BE%D0%BB%D0%BD%D0%B0-%D0%B2%D0%BE%D0%B4%D1%8B-%D1%81-%D0%B1%D0%B5%D0%BB%D0%BE%D0%B9-%D0%BF%D0%B5%D0%BD%D0%BE%D0%B9-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D0%BE%D0%B5-215889084.jpg'></img>
		<div>
			<div className={clases.descriptionBlock}>ava+description</div>
		</div>
	</div>	
	
}

export default ProfileInfo;