import React from 'react';
import classes from './App.module.css';
import Header from './Header/Header.jsx';
import MsgForm from './MsgForm/MsgForm.jsx';
import Nav from './Nav/Nav.jsx';
import { Container, Typography, Box } from '@mui/material';


function App() {

	return (
		<Container sx={{ mt: 4, mb: 4, padding: '25px 0', border: '1px solid #9C27B0'}} color="secondary">
				<Header />
				<div
					className={classes.wrapper}
				>
					<Box
						sx={{width: '45%'}}
						//className={classes.container1}
					>
						<Typography
							color="secondary"
							className={classes.mainTitle}
							variant="h3"
							sx={{ mt: 2, mb: 2 }}
						>List of Chats</Typography>
						<Nav/>
					</Box>
					<Box
						//className={classes.container2}
					>	
						<Typography
							color="secondary"
							className={classes.mainTitle}
							variant="h3"
							sx={{ mt: 2, mb: 2 }}
						>Chat for Students</Typography>
						<MsgForm />
					</Box>
				</div>
			</Container>
	);
}

export default App;
