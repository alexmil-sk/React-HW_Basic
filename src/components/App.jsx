import React from 'react';
import classes from './App.module.css';
import Header from './Header/Header.jsx';
import MsgForm from './MsgForm/MsgForm.jsx';
import Nav from './Nav/Nav.jsx';
import { Container, Box, Typography } from '@mui/material';


function App() {



	return (
		<>
			<Container sx={{ mt: 4, mb: 4, padding: '25px 0', border: '1px solid #1976D2', background: '#a7dadc'}}>
				<Header />
				<div className={classes.wrapper}>
					<div className={classes.container1}>
						<Typography
							className={classes.mainTitle}
							variant="h3"
							sx={{ mt: 2, mb: 2 }}
						>List of Chats</Typography>
						<Nav />
					</div>
					<div className={classes.container2}>
						<Typography
							className={classes.mainTitle}
							variant="h3"
							sx={{ mt: 2, mb: 2 }}
						>Chat for Students</Typography>
						<MsgForm />
					</div>
				</div>
			</Container>
		</>
	);
}

export default App;
