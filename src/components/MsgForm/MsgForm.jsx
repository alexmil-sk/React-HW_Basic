import React from 'react';
import { useDispatch } from 'react-redux';
import classes from './MsgForm.module.css';
import './MsgFormAnime.css';
import CreateMsg from './CreateMsg/CreateMsg';
import { createMessage } from '../../store/msgForm/actionsMsgForm.js';



function MsgForm() {

	const dispatch = useDispatch();

	const onSave = (value) => {
		dispatch(createMessage({
			id: Date.now(),
			...value
		}))
	}

	return (
		<>
			<CreateMsg onSave={onSave}/>
		</>
	)
}

export default MsgForm;

