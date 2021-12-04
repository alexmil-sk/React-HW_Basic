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
		<Container className={classes.container}>
			<Box sx={{ mb: '25px', border: '1px solid #1976D2', padding: '20px', margin: '0 7px' }}>
				<Typography
					variant="h4"
					className={classes.mainTitle}
				>
					Users
				</Typography>
				<List dense={dense}>
					{chatArray.map(item => {
						return (
							<>
							<ListItem
								key={item.id}
									secondaryAction={
										<IconButton  edge="end" aria-label="delete">
											<DeleteTwoToneIcon
												Outlined
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
										secondary={item.id ? `id: ${item.id}` : null}
								/>
								
							</ListItem>
							<Divider
									variant="inset"
									sx={{color: '#666'}}
								/>
							</>
						);
					})
					}
				</List>
			</Box>
		</Container>
	)
}

export default Nav;
