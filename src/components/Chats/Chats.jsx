import React, { useState } from 'react';
import classes from './Chats.module.css';
import MsgForm from '../MsgForm/MsgForm.jsx';
import NotFound from '../NotFound/NotFound.jsx';
import { List, ListItem, ListItemAvatar, ListItemText, Container, Box, Typography, Avatar, IconButton, Divider } from '@mui/material';
//import { styled } from '@mui/material/styles';
import { NavLink, Switch, Route } from 'react-router-dom';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import chatUsersArray from '../../source/db/chatDb.js';

function Chats() {


	const [dense, setDense] = useState(true);
	const [chatArray, setChatArray] = useState(chatUsersArray);


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
							{chatArray.map(item => {
								return (
									<>
										<NavLink
											to={`/chats/${item.id}`}
											className={isActive => !isActive ? classes.unselected : classes.active}
										>
											<div key={item.id}>
												<ListItem
													secondaryAction={
														<IconButton edge="end" aria-label="delete">
															<DeleteTwoToneIcon
																fontSize="large"
																color="secondary"
															/>
														</IconButton>
													}
												>
													<ListItemAvatar>
														<Avatar
															src={item.image}
															sx={{ width: 58, height: 58 }}
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
					</Box>
					<Box className={classes.boxChat}>
						<Switch>
							<Route component={MsgForm} path="/chats/:chatId" />
							<Route path="/chats*" component={NotFound}/>
						</Switch>
					</Box>
				</Box>
			</Container>
		</>
	)
}

export default Chats;
