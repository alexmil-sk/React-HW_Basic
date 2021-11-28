import React from 'react';
import './Messages.scss';
import Message from './Message/Message.jsx';

function Messages(props) {
	return (
		<div className="container">
			<h2 className="mainTitle">Messages</h2>
			<Message
				stateMsg={props.stateMsg}
			/>
		</div>
	);
}

export default Messages;