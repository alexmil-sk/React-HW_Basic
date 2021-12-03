import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import ChatIconButton from '@mui/icons-material/Chat';



function Header() {
	return (
		<AppBar position="static">
			<Toolbar>
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
					<ChatIconButton />
				</IconButton>
			</Toolbar>
		</AppBar>
	)
}

export default Header
