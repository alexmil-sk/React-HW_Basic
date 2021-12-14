import React, { useState, useCallback, } from 'react';
import classes from './Chats.module.css';
import MsgForm from '../MsgForm/MsgForm.jsx';
import NotFound from '../NotFound/NotFound.jsx';
import { List, ListItem, ListItemAvatar, ListItemText, Container, Box, Typography, Avatar, IconButton, Divider, Button } from '@mui/material';
//import { styled } from '@mui/material/styles';
import { nanoid, customAlphabet } from 'nanoid';
import { NavLink, Switch, Route } from 'react-router-dom';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import chatUsersArray from '../../source/db/chatDb.js';
import { getChat } from '../../store/chats/selectorsChats.js';
import { useSelector, useDispatch } from "react-redux";
import { createChat, deleteChat } from '../../store/chats/actionsChats.js';



function Chats({ initialValues, ...props }) {


	const [dense, setDense] = useState(true);
	const [chatArray, setChatArray] = useState(chatUsersArray);
	const msgChat = useSelector(getChat);
	const dispatch = useDispatch();


	const CustomNanoid = customAlphabet('УКЕНГЗХДЛОРПАВФЯСМИТБЮукенгзвапролджсмитбю', 7);
	const NewNanoidName = CustomNanoid();
	const NewNanoid = nanoid(8);


	const [chatValue, setChatValue] = useState(
		{
			idx: Date.now(),
			id: NewNanoid,
			name: NewNanoidName,
			date: new Date().toLocaleDateString(),
			image: "https://cs8.pikabu.ru/avatars/1832/x1832143-2115011424.png"
		}
	);


	const addUserChat = (e) => {
		dispatch(createChat(chatValue));
	}



	//*======================================================

	// const addUserChat = (e) => {
	// 	e.preventDefault();
	// 	setChatArray((chatArray) => {
	// 		const newChatArray = [...chatArray];
	// 		newChatArray.push({
	// 			idx: Date.now(),
	// 			id: NewNanoid,
	// 			name: NewNanoidName,
	// 			date: new Date().toLocaleDateString(),
	// 			image: "https://cs8.pikabu.ru/avatars/1832/x1832143-2115011424.png"
	// 		})
	// 		return newChatArray;
	// 	})
	// }




	const removeChat = useCallback((e, id) => {
		e.preventDefault();
		setChatArray((chatArray) => {
			return chatArray.filter(user => user.id !== id);
		});
	}, [])


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
						<List dense={dense}>
							{msgChat.map(item => {
								return (
									<>
										<NavLink
											to={`/chats/${item.id}`}
											className={isActive => !isActive ? classes.unselected : classes.active}
										>
											<div key={item.id}>
												<ListItem
													secondaryAction={
														<IconButton
															edge="end"
															onClick={(e) => removeChat(e, item.id)}>
															<DeleteTwoToneIcon
																fontSize="large"
																color="secondary"
															/>
														</IconButton>
													}
												>
													<ListItemAvatar>
														<Avatar
															sx={{ width: 58, height: 58 }}
															src={item.image}
														/>
													</ListItemAvatar>
													<ListItemText
														className={classes.chatName}
														primary={item.name}
														secondary={item.id ? `ID: ${item.id}` : 'Введите ID'}
													/>
												</ListItem>
												<Divider
													variant="inset"
													sx={{ color: '#666', mt: 1 }}
												/>
											</div>
										</NavLink>
									</>
								);
							})}
						</List>
						<Button
							className={classes.aadUserBtn}
							variant="contained"
							color="secondary"
							size="small"
							onClick={(e) => addUserChat(e)}
						>
							<PersonAddAltIcon
								fontSize="large"
								color="inherit"
							/>
						</Button>
					</Box>
					<Box className={classes.boxChat}>
						<Switch>
							<Route component={MsgForm} path="/chats/:chatId" />
							<Route path="/chats*" component={NotFound} />
						</Switch>
					</Box>
				</Box>
			</Container>
		</>
	)
}

export default Chats;
