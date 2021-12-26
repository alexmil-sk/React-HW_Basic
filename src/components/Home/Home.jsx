import React from 'react';
import classes from './Home.module.css';
import Profile from '../Profile/Profile.jsx';
import { Switch, Route, NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import Login from './../FireBaseComp/Login.jsx';
import Registration from '../FireBaseComp/Registration.jsx';



function Home() {
	return (
		<div>
			<AppBar position="static" color="secondary" >
				<Toolbar variant="dense" className={classes.toolbar} >
					<Button variant="h6">
						<NavLink
							to="/profile"
							className={classes.unselected}
						>{('profile').toUpperCase()}
						</NavLink>
					</Button>
					<Button variant="h6">
					<NavLink
						to="/login"
						className={classes.unselected}
					>{('login').toUpperCase()}
					</NavLink>
					</Button>
					<Button variant="h6">
						<NavLink
							to="/registration"
							className={classes.unselected}
						>{('registration').toUpperCase()}
						</NavLink>
					</Button>
				</Toolbar>
			</AppBar>

			<Typography sx={{ textAlign: 'center' }} variant="h1" color="secondary">Home</Typography>
			<Switch>
				<Route path="/profile" component={Profile} exact />
				<Route path="/registration" component={Registration} exact />
				<Route path="/login" component={Login} exact />
			</Switch>

		</div>
	)
}

export default Home;
