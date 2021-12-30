import React from 'react';
import classes from './MsgForm.module.css';
import './MsgFormAnime.css';
import CreateMsg from './CreateMsg/CreateMsg';
import ListMsg from './ListMsg/ListMsg';
import { messagesHOC } from '../../hocs/messagesHOC.js';
//import { Redirect } from 'react-router-dom';




export function MsgFormRender({ msgList, onSave, isChat }) {

	// if (!isChat) {
	// 	return <Redirect to="/404" />;
	// }

	return (
		<>
			<CreateMsg onSave={onSave} msgList={msgList}/>
			<ListMsg msgList={msgList} />
		</>
	)
}

export const MsgForm = messagesHOC(MsgFormRender);

