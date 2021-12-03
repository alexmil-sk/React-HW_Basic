import React from 'react';
import classes from './App.module.css';
import Header from './Header/Header.jsx';
import MsgForm from './MsgForm/MsgForm.jsx';
import { Container, Box, Typography} from '@mui/material';


function App() {



	return (
		<>
			<Container>
				<Box sx={{ width: '1000px', mb: '25px', border: '1px solid #1976D2',padding: '10px' }}>
					<Header />
					<div>
						<Typography
							className={classes.mainTitle}
							variant="h3"
							sx={{mt: 2, mb: 2}}
						>Chat for Students</Typography>
						<div className={classes.container}>
							<MsgForm />
						</div>
					</div>
				</Box>
			</Container>
		</>
	);
}

export default App;
