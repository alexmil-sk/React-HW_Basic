import React from 'react';
import classes from './ChatItem.module.css';
import { useParams, Redirect, Switch, Route} from "react-router-dom";
import { Box, Typography, IconButton } from '@mui/material';
import chatUsersArray from '../../../source/db/chatDb.js';
import MoreIcon from '@mui/icons-material/More';



function ChatItem() {
	const {chatId } = useParams();//! Достает из match.params одну из его характеристик: postId

	//const chat = chatUsersArray.find(item => item.id === chatId);

	if (!chatUsersArray.find(({ id }) => id === chatId)) {
		console.log('Chat не найден')
		return <Redirect to="/404" />;
	}


	return (
		<Box>
			<Typography color="primary">
				<h4>DATE: {new Date().toLocaleDateString()}</h4>
				<h4>AUTHOR: {}</h4>
				<p>Content:</p>
			</Typography>
		</Box>
	)
}

export default ChatItem;
