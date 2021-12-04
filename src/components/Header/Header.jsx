import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import ChatIconButton from '@mui/icons-material/Chat';
import MenuIconButton from '@mui/icons-material/Menu';



function Header() {
	return (
		<AppBar position="static">
			<Toolbar>
				<IconButton color="inherit">
					<MenuIconButton sx={{ fontSize: 40 }}/>
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
					<ChatIconButton sx={{ fontSize: 40 }}
					/>
				</IconButton>
			</Toolbar>
		</AppBar>
	)
}

export default Header