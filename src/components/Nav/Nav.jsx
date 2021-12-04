import React, { useState } from 'react';
import classes from './Nav.module.css';
import { List, ListItem, ListItemAvatar, ListItemText, Container, Box, Typography, Avatar, IconButton, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import chatUsersArray from '../../source/db/chatDb.js';

function Nav() {


	const [dense, setDense] = useState(true);
	const [chatArray, setChatArray] = useState(chatUsersArray);


	return (
		<Container className={classes.container} >
			<Box sx={{ mb: '25px', padding: '20px', margin: '0 7px' }}>
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
							<div key={item.id}>
								<ListItem
									secondaryAction={
										<IconButton  edge="end" aria-label="delete">
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
										primary={item.name}
										secondary={item.id ? `ID: ${item.id}` : 'Введите ID'}
									/>
								</ListItem>
								<Divider
										variant="inset"
										sx={{ color: '#666', mt: 1}}
								/>
							</div>
						);
					})
					}
				</List>
			</Box>
		</Container>
	)
}

export default Nav;
