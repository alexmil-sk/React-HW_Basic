import React from 'react';
import './NotFound.css';
import { Box, Button, IconButton, } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { NavLink } from 'react-router-dom';


function NotFound() {
	return (
		<Box className="main" >
			<Button
				color="error"
				variant="outlined"
				className="errorBtn"
			>
				<NavLink
					className="link unactive"
					to={`/`}>
					<IconButton color="error">
						<HomeIcon fontSize="large" />
					</IconButton>
				</NavLink>
			</Button>
		</Box>
	)
}

export default NotFound;
