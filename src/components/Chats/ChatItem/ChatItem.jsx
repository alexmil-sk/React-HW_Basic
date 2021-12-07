import React from 'react';
import classes from './ChatItem.module.css';
import { useParams, Redirect, NavLink} from "react-router-dom";
import { Box, Typography, IconButton } from '@mui/material';
import chatUsersArray from '../../../source/db/chatDb.js';
import MoreIcon from '@mui/icons-material/More';



function ChatItem(props) {
	const { chatId } = useParams();//! Достает из match.params одну из его характеристик: postId

	const chat = chatUsersArray.find(item => item.id === chatId);

	if (!chat) {
		return <Redirect to="/404" />;
	}


	return (
		<Box>
			<NavLink
				className={classes.commentLink}
				to={`/chats`}>
				<IconButton color="secondary">
					<MoreIcon fontSize="large" />
				</IconButton>
				<Typography
					variant="h6"
					color="secondary"
					sx={{ display: 'inline-block', padding: 0 }}
				>
					BACK TO CHATS LIST
				</Typography>
			</NavLink>
			<Typography color="primary">
				<Typography sx={{ textAlign: 'center' }} variant="h3" color="secondary">AUTHOR: {chat.name}</Typography>
				<h4>ID: {chat.id}</h4>
				<h4>AUTHOR: {chat.name}</h4>
				<h4>DATE: {chat.date}</h4>
				<p>Content:</p>
			</Typography>
		</Box>
	)
}

export default ChatItem;
