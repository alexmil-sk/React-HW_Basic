import React, { useState, useCallback, useEffect } from 'react';
import classes from './MsgForm.module.css';
import './MsgFormAnime.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { TextField, TextareaAutosize, Container, Box, Avatar, Typography, Button, Badge } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';



function MsgForm(props) {

	const [msgSubmit, setMsgSubmit] = useState([]);


	const [valueId, setValueId] = useState('');
	const [valueTitle, setValueTitle] = useState('');
	const [valueBody, setValueBody] = useState('');
	const [valueImage, setValueImage] = useState('');



	const onChangeId = (e) => {
		setValueId(e.target.value);
	}

	const onChangeTitle = (e) => {
		setValueTitle(e.target.value);
	}

	const onChangeBody = (e) => {
		setValueBody(e.target.value);
	}

	const onChangeImage = (e) => {
		setValueImage(e.target.value);
	}

	const onSubmitForm = (e) => {
		e.preventDefault();
		if (valueId && valueTitle && valueBody) {
			setMsgSubmit((msgSubmit) => {
				const newMsgSubmit = [...msgSubmit];
				newMsgSubmit.unshift({
					idx: Date.now(),
					id: valueId,
					title: valueTitle,
					body: valueBody,
					image: valueImage ? `${valueImage}` : 'https://cs8.pikabu.ru/avatars/1832/x1832143-2115011424.png'
				})

				return newMsgSubmit;
			})
		} else {alert('Заполните, пожалуйста, все поля сообщения!')}


		return (
			setValueId(''),
			setValueTitle(''),
			setValueBody(''),
			setValueImage('')
		);
	}

	useEffect(() => {

		if (msgSubmit.length === 0) { return; }

		const lastUser = msgSubmit.map(item => item.id)

		if (lastUser[0] === `info-bot`) {
			return;
		}
		const timer = setTimeout(() => {
			if (lastUser[0] === 'user') {
				setMsgSubmit(() => {
					const newMsgSubmit = [...msgSubmit];
					newMsgSubmit.unshift({
						idx: Date.now(),
						id: 'info-bot',
						title: 'I n f o B o t',
						body: `Hi, ** ${lastUser[0]} ** I'm Botty around here!`,
						image: 'https://img2.freepng.ru/20180804/pso/kisspng-mobile-robot-stock-photography-image-illustration-%D8%AF%D8%B1%D8%A8%D8%A7%D8%B1%D9%87-%D9%85%D8%A7-%D8%B4%D8%B1%DA%A9%D8%AA-%D8%A2%D8%B1%D8%B3%D8%B3-5b65f6073773d3.7988520615334087752271.jpg'
					})
					return newMsgSubmit;
				})
				return;
			} else if (lastUser[0] === '') {
				return;
			} else {
				setMsgSubmit(() => {
					const newMsgSubmit = [...msgSubmit];
					newMsgSubmit.unshift({
						idx: Date.now(),
						id: 'info-bot',
						title: 'I n f o B o t',
						body: `Hi, **${lastUser[0]}** You are not a HUMAN! Man, if you wonna be a HUMAN sign your message as "USER"`,
						image: 'https://avatars.mds.yandex.net/i?id=d5cbec0c701f73502694dd515466cb5e-3070965-images-thumbs&ref=rim&n=33&w=225&h=225'
					});
					return newMsgSubmit;
				})
			}

		}, 2000);
		return () => { clearTimeout(timer) };

	}, [msgSubmit]);


	const delSubMsgs = useCallback((idx) => {
		console.log(idx);
		setMsgSubmit((msgSubmit) => {
			return msgSubmit.filter(user => user.idx !== idx);
		})
	}, [])



	return (
		<>
			<Container maxWidth="sm">
				<Box sx={{ width: '600px', mb: '25px' }}>
					<div className={classes.container}>
						<Typography
							//className="mainTitle"
							variant="h4"
						>Message Form</Typography>
						<form onSubmit={onSubmitForm} className={classes.form}>
							<TextField
								className={classes.formElem}
								type="text"
								name="id"
								onChange={onChangeId}
								variant="outlined"
								margin="dense"
								color="warning"
								label="User's name"
								value={valueId}
							/>
							<TextField
								className={classes.formElem}
								type="text"
								name="image"
								onChange={onChangeImage}
								variant="filled"
								size="normal"
								margin="dense"
								color="warning"
								label="Users's avatar http://....."
								value={valueImage}
							/>
							<TextField
								className={classes.formElem}
								type="text"
								name="title"
								onChange={onChangeTitle}
								variant="outlined"
								margin="dense"
								color="warning"
								label="Message's title"
								value={valueTitle}
							/>
							<TextareaAutosize
								className={classes.formElem}
								name="body"
								maxRows={10}
								aria-label="maximum height"
								onChange={onChangeBody}
								placeholder="Message's text"
								style={{ height: 100 }}
								value={valueBody}
							/>
								<Button
									onClick={onSubmitForm}
									variant="contained"
									//endIcon={<SendIcon />}
									className={classes.btn}
									color="info"
									size="large"
									sx={{ width: 80, height: 80, margin: '15px auto', borderRadius: '50%', boxShadow: '0 0 10px 5px #07233E' }}
							>
								<Badge overlap="circular" color="secondary" sx={{ color: 'white'}} badgeContent={msgSubmit.length}>
									<MessageIcon sx={{ fontSize: 50  }} />
								</Badge>
								</Button>
						</form>
						<div className={classes.userMsgContainer}>
							<div className={classes.userMsg}>
								<TransitionGroup component="span">
									{msgSubmit.map((msg) => {
										return (
											<CSSTransition
												key={msg.idx}
												timeout={1000}
												classNames="msgUseAnimated"
											>
												<div
													key={msg.idx}
													className={classes.msgForm}
													severity="info"
													variant="outlined"
												>
													<div className={classes.msgContent}>
														<div className={classes.msgId}>
															<Avatar
																src={msg.image} alt={msg.id} className={classes.msgImg}
																sx={{ width: 100, height: 100, border: '1px solid', boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.5)' }}
															/>
															<span>{msg.id}</span>
														</div>
														<div className={classes.msgtext}>
															<span className={classes.msgTitle}>{msg.title}</span>
															<p>{msg.body}</p>
														</div>
														<button
															className={classes.delBtn}
															onClick={() => delSubMsgs(msg.idx)}
														>&times;</button>
													</div>
												</div>
											</CSSTransition>
										)
									})
									}
								</TransitionGroup>
							</div>
						</div>
					</div>
				</Box>
			</Container>
		</>
	)
}

export default MsgForm;

