import React from 'react';
import './Message.scss';

function Message(props) {
	return (
		<div className="container">
			<h2 className="mainTitle">Messages</h2>
			<h3 className="msgTitle">Message Title</h3>
			<ul>
				<li>{props.text}</li>
			</ul>
		</div>
	);
}

export default Message;