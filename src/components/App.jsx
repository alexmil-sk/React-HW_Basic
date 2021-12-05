import React, { useMemo, useState } from 'react';
import classes from './App.module.css';
import Header from './Header/Header.jsx';
import MsgForm from './MsgForm/MsgForm.jsx';
import Nav from './Nav/Nav.jsx';
import { ThemeProvider, createTheme, Container, Typography, Box,} from '@mui/material';
import { ToggleContext, getMode, SwitchLight } from '../myScripts/myScripts.js';



function App() {

	const [mode, setMode] = useState('light');

	const colorMode = useMemo(() => ({
		switchMode: () => {
			setMode(prevMode => prevMode === 'light' ? 'dark' : 'light')
		}
	}), [])

	const theme = useMemo(() => createTheme(getMode(mode)), [mode])


	return (
		<ToggleContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<Container sx={{ mt: 4, mb: 4, padding: '25px 0', border: '1px solid #9C27B0' }} color="secondary">
					<Header
						SwitchLight={SwitchLight}
					/>
					<div
						className={classes.wrapper}
					>
						<Box
							sx={{ width: '45%' }}
						//className={classes.container1}
						>
							<Typography
								color="secondary"
								className={classes.mainTitle}
								variant="h3"
								sx={{ mt: 2, mb: 2 }}
							>List of Chats</Typography>
							<Nav />
						</Box>
						<Box>
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
			</ThemeProvider>
		</ToggleContext.Provider>
	);
}

export default App;
