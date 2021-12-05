import React from 'react'
import { AppBar, Toolbar, Typography, Button, Box, MenuIcon, Container } from '@mui/material';



function Nav() {
	return (
		<Box sx={{ flexGrow: 1}}>
			<AppBar position="static">
				<Toolbar>
					<Button variant="h6" sx={{flexGrow: 1}}>
						Home
					</Button>
					<Button variant="h6" sx={{ flexGrow: 1 }}>
						Posts
					</Button>
				<Button variant="h6" sx={{ flexGrow: 1 }}>
						Chats
					</Button>
				<Button variant="h6" sx={{ flexGrow: 1 }}>
						Messages
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default Nav;
