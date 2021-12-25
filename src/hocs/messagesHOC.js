import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addRobotMsgThunk } from '../store/messages/actionsMsgForm.js';
import { getMsgId } from '../store/messages/selectorsMsgForm.js';
//import compareById from '../helpers/compareChats.js';
import {
	addMsgToFb,
	onTrackingAddedMsgRedux,
	offTrackingAddedMsgRedux,
	onTrackingDeletedMsgRedux,
	offTrackingDeletedMsgRedux
} from '../store/messages/actionsMsgForm.js';



export const messagesHOC = (Component) => {
	return (props) => {
		const { chatId } = useParams();

	const dispatch = useDispatch();
	const msgList = useSelector(getMsgId(chatId));
	//const isChat = useSelector(compareById(chatId));

	//const onSave = (value) => {
	//	dispatch(addRobotMsgThunk(value, chatId));
	//} 

	//!_Добавление сообщений в firebase
	const onSave = (value) => {
		dispatch(addRobotMsgThunk(value, chatId));
		dispatch(addMsgToFb(value, chatId));
	}
	//!-------------------------------------

	//!_Получение сообщений из firebase в Redux
	useEffect(() => {
		dispatch(onTrackingAddedMsgRedux);
		dispatch(onTrackingDeletedMsgRedux);
		return () => {
			//!_Отписка от получения сообщений из firebase в Redux
			dispatch(offTrackingAddedMsgRedux);
			dispatch(offTrackingDeletedMsgRedux);
		}
	}, [])
		
		return <Component
			{...props}
			//isChat={isChat}
			msgList={msgList}
			onSave={onSave}
		/>
	}
}
