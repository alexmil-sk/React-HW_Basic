import React, { useState, useCallback, useEffect } from 'react';
import classes from './MsgForm.module.css';

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
		setMsgSubmit((msgSubmit) => {
			const newMsgSubmit = [...msgSubmit];
			if (valueId && valueTitle && valueBody) {
				newMsgSubmit.unshift({
					id: valueId,
					title: valueTitle,
					body: valueBody,
					image: valueImage ? `${valueImage}` : 'https://cs8.pikabu.ru/avatars/1832/x1832143-2115011424.png'
				})
			}
			return newMsgSubmit;
		})
		setValueId('');
		setValueTitle('');
		setValueBody('');
		setValueImage('');
	}


	useEffect(() => {
		const timer = setTimeout(() => {
			const arrKey = msgSubmit.map(item => item.id)
			arrKey.map(key => props.callBot(key));
		}, 1500)
		return () => { clearTimeout(timer) };
	}, [msgSubmit])


	const delSubMsgs = useCallback((id) => {
		setMsgSubmit((msgSubmit) => {
			return msgSubmit.filter(user => user.id !== id);
		})
	}, [])



	return (
		<div className={classes.container}>
			<h2 className="mainTitle">Message Form</h2>
			<form onSubmit={onSubmitForm} className={classes.form}>
				<input
					className={classes.formElem}
					type="text"
					name="id"
					onChange={onChangeId}
					placeholder="User's name"
					value={valueId}
				/>
				<input
					className={classes.formElem}
					type="text"
					name="image"
					onChange={onChangeImage}
					placeholder="Users's avatar http://....."
					value={valueImage}
				/>
				<input
					className={classes.formElem}
					type="text"
					name="title"
					onChange={onChangeTitle}
					placeholder="Message's title"
					value={valueTitle}
				/>
				<textarea
					className={classes.formElem}
					name="body"
					cols="30"
					rows="10"
					onChange={onChangeBody}
					placeholder="Message's text"
					value={valueBody}
				/>
				<button className={classes.btn}>Send Message</button>
			</form>
			<div className={classes.userMsgContainer}>
				<div className={classes.userMsg}>
					{msgSubmit.map(msg => {
						return (
							<div key={msg.id} className={classes.msgForm}>
								<div className={classes.msgContent}>
									<div className={classes.msgId}>
										<img src={msg.image} alt={msg.id} className={classes.msgImg} />
										<span>{msg.id}</span>
									</div>
									<div className={classes.msgtext}>
										<span className={classes.msgTitle}>{msg.title}</span>
										<p>{msg.body}</p>
									</div>
									<button
										className={classes.delBtn}
										onClick={() => delSubMsgs(msg.id)}
									>&times;</button>
								</div>
							</div>
						)
					})
					}
				</div>
			</div>
		</div>
	)
}

export default MsgForm;

