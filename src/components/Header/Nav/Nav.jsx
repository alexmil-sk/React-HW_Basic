import React from 'react';
import './Nav.css';
import Coffee from '../../Coffee/Coffee.jsx';
import CoffeeItem from '../../Coffee/CoffeeItem/CoffeeItem.jsx';
import MsgForm from '../../MsgForm/MsgForm.jsx';
import Comments from '../../Comments/Comments.jsx';
import Chats from '../../Chats/Chats.jsx';
import Posts from '../../Posts/Posts.jsx';
import PostItem from '../../Posts/PostItem/PostItem.jsx';
import { NavLink, Switch, Route } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box, } from '@mui/material';


function Nav() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Button
						variant="h6"
						sx={{ flexGrow: 1 }}
					>
						<NavLink
							exact
							to="/"
							className={isActive => !isActive ? "unselected" : "active"}
						>COFFEE
						</NavLink>
					</Button>
					<Button variant="h6" sx={{ flexGrow: 1 }}>
						<NavLink
							to="/posts"
							className={isActive => !isActive ? "unselected" : "active"}
						>POSTS
						</NavLink>
					</Button>
					<Button variant="h6" sx={{ flexGrow: 1 }}>
						<NavLink
							to="/chats"
							className={isActive => !isActive ? "unselected" : "active"}
						>CHATS
						</NavLink>
					</Button>
					<Button variant="h6" sx={{ flexGrow: 1 }}>
						<NavLink
							to="/messages"
							className={isActive => !isActive ? "unselected" : "active"}
						>MESSAGE FORM
						</NavLink>
					</Button>
					<Button variant="h6" sx={{ flexGrow: 1 }}>
						<NavLink
							to="/comments"
							className={isActive => !isActive ? "unselected" : "active"}
						>COMMENTS
						</NavLink>
					</Button>
				</Toolbar>
			</AppBar>
			<Switch>
				<Route path="/" component={Coffee} exact/>
				<Route path="/coffee/:coffeeId" component={CoffeeItem}/>
				<Route path="/posts" component={Posts} exact/>
				<Route path="/posts/:postId" component={PostItem}/>
				<Route path="/chats" component={Chats} />
				<Route path="/msgform" component={MsgForm} />
				<Route path="/comments" component={Comments} />
			</Switch>
		</Box>
	)
}

export default Nav;
