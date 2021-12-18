import React from 'react';
import classes from './Chats.module.css';
import { Container, Box, Typography, Button } from '@mui/material';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ChatsList from './ChatsList/ChatsList.jsx';
import {chatsHOC} from '../../hocs/chatsHOC.js';




export function ChatsRender({ chats, addUserChat, deleteUserChat, addAllChats}) {
	


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
						<Box>
							<Typography
								color="secondary"
								variant="h4"
								className={classes.mainTitleUsers}
							>
								Users
							</Typography>
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

export const Chats = chatsHOC(ChatsRender);
