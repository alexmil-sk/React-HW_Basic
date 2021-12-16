import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import MsgForm from '../../MsgForm/MsgForm.jsx';
import NotFound from '../../NotFound/NotFound.jsx';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { List, ListItem, ListItemAvatar, ListItemText, Box, Avatar, IconButton, Divider } from '@mui/material';
import classes from '../Chats.module.css';
import { NavLink } from 'react-router-dom';





function ChatsList({ deleteUserChat, chats }, ...props) {
	
	const [dense, setDense] = useState(true);

	return (
		<div>
			<List dense={dense}>
				{chats.map(item => {
					return (
						<div key={item.id}>
							<NavLink
								to={`/chats/${item.id}`}
								className={isActive => !isActive ? classes.unselected : classes.active}
							>
								<div>
									<ListItem
										secondaryAction={
											<IconButton
												edge="end"
											onClick={(e) => deleteUserChat(e, item.id)}
											>
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
										<ListItemText secondary={item.date} />
									</ListItem>
									<Divider
										variant="inset"
										sx={{ color: '#666', mt: 1 }}
									/>
								</div>
							</NavLink>
						</div>
					);
				})}
			</List>
			<Box className={classes.boxChat}>
				<Switch>
					<Route component={MsgForm} path="/chats/:chatId" />
					<Route path="/chats*" component={NotFound} />
				</Switch>
			</Box>
		</div >
	)
}

export default ChatsList;



