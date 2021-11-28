import React from 'react';
import classes from './App.module.css';
import Messages from './Messages/Messages.jsx';

class App extends React.Component {
	state = {
		messages: [
			{
				id: "user1",
				title: "Message Title",
				body: "I'm the first massage",
				image: ""
			},
		],
	};

	render() {
		const stateMsg = this.state.messages;
					
		return (
			<div className={classes.container}>
				<h1 className={classes.mainTitle}>Main Title React App</h1>
				<Messages
					stateMsg={stateMsg}
				/>
			</div>
		);
	}
}

export default App;
