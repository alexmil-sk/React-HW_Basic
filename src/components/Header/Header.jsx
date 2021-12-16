import React from 'react';
import Nav from './Nav/Nav.jsx';
import { AppBar, Toolbar, Divider, Typography, IconButton } from '@mui/material';
import ChatIconButton from '@mui/icons-material/Chat';
import MenuIconButton from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';




function Header(props) {
	return (
		<>
			<AppBar position="static" color="secondary">
				<Toolbar>
					<IconButton color="inherit">
						<MenuIconButton sx={{ fontSize: 40 }} />
					</IconButton>
					<Typography
						variant="h5"
						component="span"
						sx={{ flexGrow: 1 }}
					>
						GeekBrains University`s CHAT
					</Typography>
					<IconButton
						color="inherit"
					>
						<NavLink
							to="/chats"
						><ChatIconButton sx={{ fontSize: 40, color: '#fff' }} />
						</NavLink>
						<props.SwitchLight />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Divider />
			<Nav />
		</>
	)
}

export default Header
