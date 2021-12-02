import React from 'react';
import classes from './App.module.css';
import MsgForm from './MsgForm/MsgForm.jsx';

function App() {

	

	return (
		<div>
			<h1 className={classes.mainTitle}>Main Title React App</h1>
			<div className={classes.container}>
				<MsgForm />
			</div>
		</div>
	);
}

export default App;
