import React, { useState } from 'react';
import classes from './Nav.module.css';
import { List, ListItem, ListItemAvatar, ListItemText, Container, Box, Typography, Avatar, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import FolderIcon from '@mui/icons-material/Folder';
import chatUsersArray from '../../source/db/chatDb.js';

function Nav() {


	const [dense, setDense] = useState('Изменить true bkb false');
	const [secondary, setSecondary] = useState('Заполнить');
	const [chatArray, setChatArray] = useState(chatUsersArray);


	//function generate(element) {
	//	return chatArray.map((item) =>
	//		React.cloneElement(element, {
	//			id: item.id,
	//			name: item.name
	//		}),
	//	);
	//}





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
						);
					})
					}
				</List>
			</Box>
		</Container>
	)
}

export default Nav;
