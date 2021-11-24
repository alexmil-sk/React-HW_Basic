import React, {useState} from 'react';
import classes from './App.module.css';
import Message from './Message/Message.jsx';
import Counter from './Counter/Counter.jsx';

class App extends React.Component {
	state = {
		messages: {
			msg1: "I'm the first massage",
		},
		counter: 0,
		isClear: true
	};



	render() {
		const counter = this.state.counter;
		const isClear = this.state.isClear;
		const stateMsg = this.state.messages;
		const decrement = () => this.setState({ counter: counter - 1, isClear: false });
		const increment = () => this.setState({ counter: counter + 1, isClear: false });
		const getNull = () => this.setState({counter: 0, isClear: true});
					
		return (
			<div className={classes.container}>
				<h1 className={classes.mainTitle}>Main Title React App</h1>
				<Message text={stateMsg.msg1} />
				<Counter
					title='Counter Title'
					counter={this.state.counter}
					decrement={decrement}
					increment={increment}
					isClear={this.state.isClear}
					getNull={getNull}
				/>
			</div>
		);
	}
}

export default App;
