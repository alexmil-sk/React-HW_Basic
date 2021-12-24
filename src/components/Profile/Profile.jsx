import React, { useSelector } from 'react';
import classes from './Profile.module.css';
import Favorites from './Favorites/Favorites.jsx';
import Help from './Help/Help.jsx';
import UserInfo from './UserInfo/UserInfo.jsx';
import NotFound from '../NotFound/NotFound.jsx';
import { NavLink, Switch, Route } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material';
import { getUser } from '../../store/user/reducerAuth.js';
import ReactJson from 'react-json-view';


function Profile() {

	const user = useSelector(getUser);

	return (
		<div>
			<Box>
				<AppBar position="static" color="secondary">
					<Toolbar variant="dense" className={classes.toolbar}>
						<Button
							className={classes.btn} variant="h6"
							sx={{ flexGrow: 1 }}
						>
							<NavLink
								to="/profile/user"
								className={isActive => !isActive ? classes.unselected : classes.active}
							>USERINFO
							</NavLink>
						</Button>
						<Button
							className={classes.btn}
							variant="h6"
							sx={{ flexGrow: 1 }}
						>
							<NavLink
								to="/profile/favorites"
								className={isActive => !isActive ? classes.unselected : classes.active}
							>FAVORITES
							</NavLink>
						</Button>
						<Button
							className={classes.btn}
							variant="h6"
							sx={{ flexGrow: 1 }}
						>
							<NavLink
								to="/profile/help"
								className={isActive => !isActive ? classes.unselected : classes.active}
							>HELP
							</NavLink>
						</Button>
					</Toolbar>
				</AppBar>
			</Box>
			<Typography sx={{ textAlign: 'center' }} variant="h2" color="secondary">PROFILE</Typography>
			<ReactJson src={user.toJSON()}/>
			<Switch>
				<Route path="/profile/favorites" component={Favorites} />
				<Route path="/profile/help" component={Help} />
				<Route path="/profile/user" component={UserInfo} exact />
				<Route path="/profile/*" component={NotFound} exact />
			</Switch>

		</div>
	)
}

export default Profile;
