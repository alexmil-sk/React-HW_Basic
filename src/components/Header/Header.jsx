import React, { useState } from 'react';
import Nav from './Nav/Nav.jsx';
import { Spring, animated } from 'react-spring'
import classes from './Header.module.css';
import { AppBar, Toolbar, Divider, Typography, IconButton } from '@mui/material';
import ChatIconButton from '@mui/icons-material/Chat';
import MenuBookButton from '@mui/icons-material/MenuBook';
import ContactPageButton from '@mui/icons-material/ContactPage';
import { NavLink } from 'react-router-dom';




function Header(props) {

	const [show, setShow] = useState(false);

	return (
		<div>
			<AppBar position="static" color="secondary">
				<Toolbar>

					<IconButton
						className={classes.iconBtn}
						onClick={() => setShow(!show)}
						color="inherit"
					>
						<Spring
							loop
							config={{ duration: 3000 }}
							from={{ transform: 'rotate(0deg)', boxShadow: '0 0 0px 0px #ccc' }}
							to={[
								{ transform: 'rotate(15deg)', boxShadow: '0 0 5px 5px hsl(50, 100%, 71%)' },
								{ transform: 'rotate(-15deg)', boxShadow: '0 0 5px 5px lightyellow' },
								{ transform: 'rotate(0deg)', boxShadow: '0 0 0px 0px #ccc' }
							]}
						>
							{styles => (
								<animated.div style={styles}>
									{!show ? <ContactPageButton sx={{ fontSize: 40 }} /> : <MenuBookButton sx={{ fontSize: 40 }} />}
								</animated.div>
							)}
						</Spring>
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
						>
							<ChatIconButton sx={{ fontSize: 40, color: '#fff' }} />
						</NavLink>
						<props.SwitchLight />
					</IconButton>
				</Toolbar>
			</AppBar >
			<Divider />
			<Nav show={show} />
		</div >
	)
}

export default Header
