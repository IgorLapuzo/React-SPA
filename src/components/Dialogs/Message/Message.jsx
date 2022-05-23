import React from 'react'
import clases from './../Dialogs.module.css';



const Message = (props)=> {
	return (
		<div className={clases.message}>{props.message}</div>
	)
}


export default Message;