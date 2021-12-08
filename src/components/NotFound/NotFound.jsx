import React from 'react';
import classes from './NotFound.module.css';
import { Box, Button, IconButton, } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';


function NotFound() {
	return (
		<Box className={classes.main}>
			<div className={classes.btnWrapper}>
			<Button
				color="error"
				variant="outlined"
				className={classes.errorBtn}
			>
				<NavLink
					className={classNames(classes.link, classes.unactive)}
					to={`/`}>
					<IconButton color="error">
						<HomeIcon fontSize="large" />
					</IconButton>
				</NavLink>
			</Button>
			</div>
		</Box>
	)
}

export default NotFound;
