import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addRobotMsgThunk } from '../store/messages/actionsMsgForm.js';
import { getMsgId } from '../store/messages/selectorsMsgForm.js';
//import compareById from '../helpers/compareChats.js';



export const messagesHOC = (Component) => {
	return (props) => {
		const { chatId } = useParams();

	const dispatch = useDispatch();
	const msgList = useSelector(getMsgId(chatId));
	//const isChat = useSelector(compareById(chatId));


	const onSave = (value) => {
		dispatch(addRobotMsgThunk(value, chatId))

	} 


		return <Component
			{...props}
			//isChat={isChat}
			msgList={msgList}
			onSave={onSave}
		/>
	}
}
