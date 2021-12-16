import React, { useCallback, useEffect, } from 'react';
import classes from './Chats.module.css';
import { Container, Box, Typography, Button } from '@mui/material';
import { nanoid, customAlphabet } from 'nanoid';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { getChatList } from '../../store/chats/selectorsChats.js';
import { useSelector, useDispatch } from "react-redux";
import { createChat, deleteChat, addChats } from '../../store/chats/actionsChats.js';
import { deleteMessageByChat } from '../../store/messages/actionsMsgForm.js';
import ChatsList from './ChatsList/ChatsList.jsx';
import { chatUsersArray } from '../../source/db/chatDb.js';



function Chats() {
	const chats = useSelector(getChatList);

	const dispatch = useDispatch();


	const CustomNanoid = customAlphabet('УКЕНГЗХДЛОРПАВФЯСМИТБЮукенгзвапролджсмитбю', 7);
	const NewNanoidName = CustomNanoid();
	const NewNanoid = nanoid(8);


	const addUserChat = useCallback(() => {
		dispatch(createChat({
			idx: Date.now(),
			id: NewNanoid,
			name: NewNanoidName,
			date: new Date().toLocaleDateString(),
			image: "https://cs8.pikabu.ru/avatars/1832/x1832143-2115011424.png"
		}));
	}, [])

	const deleteUserChat = (e, chatId) => {
		e.preventDefault();
		dispatch(deleteChat(chatId));
		dispatch(deleteMessageByChat(chatId))
	}

	useEffect(() => {
		dispatch(addChats(chatUsersArray))
	}, [])

	const addAllChats = useCallback((e) => {
		e.preventDefault();
		dispatch(addChats(chatUsersArray))
	}, []);



	//*======================================================


	return (
		<>
			<Container className={classes.container} >
				<Typography
					color="secondary"
					className={classes.mainTitle}
					variant="h3"
					sx={{ mt: 2, mb: 2 }}
				>List of Chats</Typography>
				<Box className={classes.wrapper}>
					<Box
						className={classes.boxUsers}
						sx={{ mb: '25px', margin: '0 7px' }}
					>
						<Typography
							color="secondary"
							variant="h4"
							className={classes.mainTitle}
						>
							Users
						</Typography>
						<Box>
							<Button
								className={classes.addUserBtn}
								variant="contained"
								color="secondary"
								size="small"
								onClick={addUserChat}
							>
								<PersonAddAltIcon
									fontSize="large"
									color="inherit"
								/>
							</Button>
							<Button
								className={classes.addAllBtn}
								variant="contained"
								color="secondary"
								size="small"
								onClick={(e) => addAllChats(e)}
							>
								<GroupAddIcon
									fontSize="large"
									color="inherit"
								/>
							</Button>
						</Box>
						<ChatsList deleteUserChat={deleteUserChat} chats={chats} />
					</Box>
				</Box>
			</Container>
		</>
	)
}

export default Chats;
