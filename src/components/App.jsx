import React, { useState, useCallback } from 'react';
import classes from './App.module.css';
import Messages from './Messages/Messages.jsx';
import MsgForm from './MsgForm/MsgForm.jsx';

function App() {

	const [stateMsgs, setStateMsgs] = useState([]);
	const [userKey, seyUserKey] = useState('');

	const addUsersMsgs = useCallback(() => {
		setStateMsgs((stateMsgs) => {
			const NewStateMsgs = [...stateMsgs];
			NewStateMsgs.unshift({
				id: `user-${stateMsgs.length + 1}`,
				title: `Message title user-${stateMsgs.length + 1}`,
				body: `Тело сообщения user-${stateMsgs.length + 1}`,
				image: "https://cs6.pikabu.ru/avatars/1576/v1576985-1962120878.jpg",
			});
			return NewStateMsgs;
		});
	}, []);


	const delUsersMsgs = useCallback((id) => {
		setStateMsgs((stateMsgs) => {
			return stateMsgs.filter(user => user.id !== id);
		})
	}, [])


	const callBot = (key) => {
		setStateMsgs(() => {
			const newstateMsgs = [...stateMsgs];
			if (key === 'user') {

				newstateMsgs.unshift({
					id: `info-bot-${(Math.random(1) * 100).toFixed()}`,
					title: 'I n f o B o t',
					body: `Hi, ** ${key} ** I'm Botty around here!`,
					image: 'https://st4.depositphotos.com/20523700/37870/v/1600/depositphotos_378706342-stock-illustration-vector-illustration-robot-icon.jpg'
				});
				seyUserKey('');
			} else {
				newstateMsgs.unshift({
					id: `info-bot-${(Math.random(1) * 100).toFixed()}`,
					title: 'I n f o B o t',
					body: `Hi, **** You are not a human!`,
					image: 'https://st4.depositphotos.com/20523700/37870/v/1600/depositphotos_378706342-stock-illustration-vector-illustration-robot-icon.jpg'
				});
				seyUserKey('');
			}
			return newstateMsgs;
		})
	}

	return (
		<div>
			<h1 className={classes.mainTitle}>Main Title React App</h1>
			<div className={classes.container}>
				<Messages
					stateMsgs={stateMsgs}
					addUsersMsgs={addUsersMsgs}
					delUsersMsgs={delUsersMsgs}
				/>
				<MsgForm
					callBot={callBot}
					delUsersMsgs={delUsersMsgs}
				/>
			</div>
		</div>
	);
}

export default App;
