import React from 'react'
import classes from './Message.module.css';

function Message(props) {
	return (
		<div>
			<h3 className={classes.msgTitle}>{props.stateMsg[0].title}</h3>
			<ul>
				<li>{props.stateMsg[0].id} : {props.stateMsg[0].body}</li>
			</ul>
		</div>
	)
}

export default Message;

