import React, { useState, useRef, useCallback, useEffect } from 'react';
import classes from '../MsgForm.module.css';
import '../MsgFormAnime.css';
import { useSelector } from "react-redux";
//import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { TextField, Container, Box, IconButton, Badge, Typography, Button, containerClasses } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';



function CreateMsg({ initialValues, onSave, msgList}) {


	const [msgValue, setMsgValue] = useState(initialValues || {
		//idx: Date.now(),
		idx: Date.now(),
		id: '',
		title: '',
		body: '',
		image: ''
	})




	const msgReset = useCallback(() => {
		setMsgValue({
			id: '',
			title: '',
			body: '',
			image: ''
		})
	}, []);



	//todo_Ссылка для активного поля Id
	const inputIdRef = useRef(null);

	/**
	 * @param {'id' | 'image' | 'title' | 'body'} name
	 */
	const getMsgValueByName = (name) => msgValue[name]



	const onChange = (name) =>
		(e) => {
			setMsgValue((prev) => ({
				...prev,
				[name]: e.target.value,
			}))
		}

	const onSubmitForm = (e) => {
		e.preventDefault();
		if (msgValue.id === '' || msgValue.title === '' || msgValue.body === '') {
			alert('Заполните поля');
		}
		onSave(msgValue);
		msgReset();
	}

	//!_ACHTUNG!! Das ist Robot!========================
	// useEffect(() => {

	// if (msgSubmit.length === 0) { return; }

	// const lastUser = msgSubmit.map(item => item.id)

	// if (lastUser[0] === 'info-bot' || lastUser[0] === 'sckeleton') {
	// return;
	// }
	// const timer = setTimeout(() => {
	// if (lastUser[0] === 'user') {
	// setMsgSubmit(() => {
	// const newMsgSubmit = [...msgSubmit];
	// newMsgSubmit.unshift({
	// idx: Date.now(),
	// id: 'info-bot',
	// title: 'I n f o B o t',
	// body: `Hi, ** ${lastUser[0]} ** I'm Botty around here!`,
	// image: 'https://img2.freepng.ru/20180804/pso/kisspng-mobile-robot-stock-photography-image-illustration-%D8%AF%D8%B1%D8%A8%D8%A7%D8%B1%D9%87-%D9%85%D8%A7-%D8%B4%D8%B1%DA%A9%D8%AA-%D8%A2%D8%B1%D8%B3%D8%B3-5b65f6073773d3.7988520615334087752271.jpg'
	// })
	// return newMsgSubmit;
	// })
	// return;
	// } else if (lastUser[0] === '') {
	// return;
	// } else {
	// setMsgSubmit(() => {
	// const newMsgSubmit = [...msgSubmit];
	// newMsgSubmit.unshift({
	// idx: Date.now(),
	// id: 'sckeleton',
	// title: 'I n f o B o t',
	// body: `Hi, **${lastUser[0]}** You are not a HUMAN! Man, if you wonna be a HUMAN sign your message as "USER"`,
	// image: 'https://avatars.mds.yandex.net/i?id=d5cbec0c701f73502694dd515466cb5e-3070965-images-thumbs&ref=rim&n=33&w=225&h=225'
	// });
	// return newMsgSubmit;
	// })
	// }

	// }, 2000);
	// return () => { clearTimeout(timer) };

	// }, [msgSubmit]);

	//!_Das ist den Robot ende!====================


	//todo_useEffect для активного поля Id

	useEffect(() => {
		inputIdRef.current?.focus();
	}, [msgValue.id]);
	//todo=============================

	//*=================================================================

	return (
		<>
			<Container sx={{ padding: '0!important', ml: 1, mr: 1 }}>
				<Box sx={{ mb: '25px' }}>
					<div className={classes.container}>
						<Typography
							color="secondary"
							variant="h4"
							className={classes.mainTitle}
						>Message Form</Typography>
						<form
							onSubmit={onSubmitForm}
							className={classes.form}>
							<TextField
								inputRef={inputIdRef}
								className={classes.formElem}
								type="text"
								name="id"
								onChange={onChange('id')}
								variant="outlined"
								margin="dense"
								color="secondary"
								label="User's name"
								value={getMsgValueByName('id')}
							/>
							<TextField
								className={classes.formElem}
								type="text"
								name="image"
								onChange={onChange('image')}
								variant="filled"
								size="normal"
								margin="dense"
								color="secondary"
								label="Users's avatar http://....."
								//value={getMsgValueByName('image')}
							/>
							<TextField
								className={classes.formElem}
								type="text"
								name="title"
								onChange={onChange('title')}
								variant="outlined"
								margin="dense"
								color="secondary"
								label="Message's title"
								value={getMsgValueByName('title')}
							/>
							<TextField
								multiline
								margin="dense"
								color="secondary"
								className={classes.formElem}
								name="body"
								rows={3}
								onChange={onChange('body')}
								label="Message's text"
								placeholder="Message's text"
								value={getMsgValueByName('body')}
							/>
							<Button
								onClick={onSubmitForm}
								variant="contained"
								className={classes.btn}
								color="secondary"
								size="large"
								sx={{ width: 80, height: 80, margin: '15px auto', borderRadius: '50%', boxShadow: '0 0 10px 5px #07233E' }}
							>
								<Badge overlap="circular" color="info" sx={{ color: 'white' }} badgeContent={msgList.length}>
									<MessageIcon sx={{ fontSize: 50 }} />
								</Badge>
							</Button>
						</form>
					</div>
				</Box>
			</Container>
		</>
	)
}

export default CreateMsg;

