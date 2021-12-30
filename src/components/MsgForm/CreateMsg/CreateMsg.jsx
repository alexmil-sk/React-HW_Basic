import React, { useState, useRef, useCallback, useEffect } from 'react';
import classes from '../MsgForm.module.css';
import '../MsgFormAnime.css';
import { TextField, Container, Box, Badge, Typography, Button,} from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';

export const CreateMsgTestIds = {
	testId: "CreateMsg-TextFieldId",
	title: "CreateMsg-TextFieldTitle",
	submit: "CreateMsg-onSubmitFormBtn"
}


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
//*=======Вариант 1
		if (msgValue.id === '') {
			return msgValue.id = undefined;
		}
//*=======Вариант 2
		// if (msgValue.id === '' || msgValue.title === '' || msgValue.body === '') {
		// 	alert('Заполните поля');
		// 	return;
		// }
		onSave(msgValue);
		msgReset();
	}


	//todo_useEffect для активного поля Id

	useEffect(() => {
		inputIdRef.current?.focus();
	}, [msgValue.id]);
	//todo=============================

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
								data-testid={CreateMsgTestIds.testId}
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
								value={getMsgValueByName('image')}
							/>
							<TextField
								data-testid={CreateMsgTestIds.title}
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
								placeholder="Message's text"q
								value={getMsgValueByName('body')}
							/>
							<Button
								data-testid={CreateMsgTestIds.submit}
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

