import React from 'react';
import { useDispatch } from 'react-redux';
import classes from './MsgForm.module.css';
import './MsgFormAnime.css';
import EditMsg  from './EditMsg/EditMsg.jsx';
import { useParams } from 'react-router-dom';
import CreateMsg from './CreateMsg/CreateMsg';
import ListMsg from './ListMsg/ListMsg';
import { createMessage, deleteMessage} from '../../store/msgForm/actionsMsgForm.js';




function MsgForm() {

	const { chatId } = useParams();//! Достает из match.params одну из его характеристик: postId


	const dispatch = useDispatch();

	const onSave = (value) => {
		dispatch(createMessage({
			id: chatId,
			...value
		}))
	}

	const onDelete = (value) => {
		dispatch(deleteMessage(value))
	}

	return (
		<>
			<CreateMsg onSave={onSave} />
			
			<ListMsg onDelete={onDelete} />
		</>
	)
}

export default MsgForm;

