import React from 'react';
import classes from './Home.module.css';
import Profile from '../Profile/Profile.jsx';
import UserInfo from '../Profile/UserInfo/UserInfo.jsx';
import { Switch, Route, NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';



function Home() {
	return (
		<div>
			<AppBar position="static" color="secondary" >
				<Toolbar variant="dense" className={classes.toolbar} >
					<Button variant="h6"></Button>
					<NavLink
						to="/profile"
						className= {classes.unselected}
					>PROFILE
					</NavLink>
				</Toolbar>
			</AppBar>

			<Typography sx={{ textAlign: 'center' }} variant="h1" color="secondary">Home</Typography>
			
			<Switch>
				<Route path="/profile" component={Profile} exact />
			</Switch>

		</div>
	)
}

export default Home;
