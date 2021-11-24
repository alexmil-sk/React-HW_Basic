import React from 'react';
import classes from './App.module.css';
import Message from './Message/Message.jsx';

class App extends React.Component {
	state = {
		messages: {
			msg1: "I'm the first massage",
		}
	};

	render() {
		const stateMsg = this.state.messages;
		return (
			<div className={classes.container}>
				<h1 className={classes.mainTitle}>Main Title React App</h1>
				<Message text={stateMsg.msg1}/>
			</div>
		);
	}
}

export default App;
