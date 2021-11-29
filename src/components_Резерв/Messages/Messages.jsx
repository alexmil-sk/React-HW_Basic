import React from 'react';
import './Messages.scss';
import Message from './Message/Message.jsx';

function Messages(props) {

	const addMsgs = () => {
		props.addUsersMsgs();
	}

	return (
		<div className="container">
			<h2 className="mainTitle">Messages</h2>
			<button onClick={addMsgs}>{props.stateMsgs.length === 0 ? "No messages" : `You've ${props.stateMsgs.length} messages`}</button>
			<Message
				stateMsgs={props.stateMsgs}
				addUsersMsgs={props.addUsersMsgs}
				delUsersMsgs={props.delUsersMsgs}
			/>
		</div>
	);
}

export default Messages;