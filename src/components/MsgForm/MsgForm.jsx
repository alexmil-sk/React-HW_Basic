import React, from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './MsgForm.module.css';
import './MsgFormAnime.css';
import { useParams } from 'react-router-dom';
import CreateMsg from './CreateMsg/CreateMsg';
import ListMsg from './ListMsg/ListMsg';
import { createMessage } from '../../store/messages/actionsMsgForm.js';
import { getMsgId } from '../../store/messages/selectorsMsgForm.js';
//import { hasChatById } from '../../store/chats/selectorsChats.js';




function MsgForm() {

	const { chatId } = useParams();

	const dispatch = useDispatch();
	const msgList = useSelector(getMsgId(chatId));
	//const isChat = useSelector(hasChatById(chatId));

	const haveMessage = ({ id, image , title, body }) => {
		
		const userMessage = {
			id, image, title, body
		};
		dispatch(createMessage(userMessage, chatId))

	};

	const onSave = (value) => {
		haveMessage(value);

	} 
	
	//if (!isChat) {
	//	return <Redirect to="/404" />;
	//}

	return (
		<>
			<CreateMsg onSave={onSave} msgList={msgList}/>
			<ListMsg msgList={msgList} />
		</>
	)
}

export default MsgForm;

