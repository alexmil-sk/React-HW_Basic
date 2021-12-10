import React from 'react';
import classes from './Profile.module.css';
import Favorites from './Favorites/Favorites.jsx';
import Help from './Help/Help.jsx';
import UserInfo from './UserInfo/UserInfo.jsx';
import NotFound from '../NotFound/NotFound.jsx';
import { NavLink, Switch, Route } from 'react-router-dom';
import { TextField, AppBar, Toolbar, Button, Box, Typography, Checkbox } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { CHECKED_BOX } from '../../store/profile/actionsProfile.js';


function Profile() {

	const dispatch = useDispatch();
	const checkBox = useSelector(state => state.checkBox);

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
			<Box>
				<Checkbox
					size="large"
					onChange={(e) => {
						dispatch({
							type: CHECKED_BOX,
							payload: e.currentTarget.checked,
						})
					}}
				/>
				<TextField
					//inputRef
					className={classes.formElem}
					type="text"
					name="name"
					variant="outlined"
					margin="dense"
					color="secondary"
					sx={checkBox ? { backgroundColor: 'lightgreen'} : { backgroundColor: '#ffe066'}}
					label="CHECKBOX WINDOW"
					value={checkBox ? 'CheckBox is ON' : 'CheckBox is OFF'}
				/>
			</Box>
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
