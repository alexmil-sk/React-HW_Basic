import React, { useMemo, useState } from 'react';
import classes from './App.module.css';
import Header from './Header/Header.jsx';
import MsgForm from './MsgForm/MsgForm.jsx';
import Comments from './Comments/Comments.jsx';
import ListChats from './Chats/ListChats/ListChats.jsx';
import Posts from './Posts/Posts.jsx';
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
						<ListChats />
						<MsgForm />
						<Comments />
						<Posts/>
					</div>
				</Container>
			</ThemeProvider>
		</ToggleContext.Provider>
	);
}

export default App;
