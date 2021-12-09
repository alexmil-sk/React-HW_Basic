import React from 'react';
import classes from './Nav.module.css';
import Coffee from '../../Coffee/Coffee.jsx';
import CoffeeItem from '../../Coffee/CoffeeItem/CoffeeItem.jsx';
import MsgForm from '../../MsgForm/MsgForm.jsx';
import Comments from '../../Comments/Comments.jsx';
import Chats from '../../Chats/Chats.jsx';
import Posts from '../../Posts/Posts.jsx';
import PostItem from '../../Posts/PostItem/PostItem.jsx';
import NotFound from '../../NotFound/NotFound.jsx';
import Profile from '../../Profile/Profile.jsx';
import Home from '../../Home/Home.jsx';
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
							className={isActive => !isActive ? classes.unselected : classes.active}
						>HOME
						</NavLink>
					</Button>
					<Button variant="h6" sx={{ flexGrow: 1 }}>
						<NavLink
							to="/posts"
							className={isActive => !isActive ? classes.unselected : classes.active}
						>POSTS
						</NavLink>
					</Button>
					<Button variant="h6" sx={{ flexGrow: 1 }}>
						<NavLink
							to="/chats"
							className={isActive => !isActive ? classes.unselected : classes.active}
						>CHATS
						</NavLink>
					</Button>
					<Button variant="h6" sx={{ flexGrow: 1 }}>
						<NavLink
							to="/coffee"
							className={isActive => !isActive ? classes.unselected : classes.active}
						>COFFEE
						</NavLink>
					</Button>
					<Button variant="h6" sx={{ flexGrow: 1 }}>
						<NavLink
							to="/404"
							className={isActive => !isActive ? classes.unselected : classes.active}
						>PAGE 404
						</NavLink>
					</Button>
				</Toolbar>
			</AppBar>
			<Switch>
				<Route path="/" component={Home} exact/>
				<Route path="/coffee" component={Coffee} exact/>
				<Route path="/coffee/:coffeeId" component={CoffeeItem}/>
				<Route path="/posts" component={Posts} exact/>
				<Route path="/posts/:postId" component={PostItem}/>
				<Route path="/chats" component={Chats}/>
				<Route path="/profile" component={Profile} />
				<Route path="/posts/:postId/comments" component={Comments} />
				<Route path={["/*", "/chats/:chatId/*", "/chats/*", "/posts/:postId/*", "/posts/*", "/messages/*", "/coffee/:coffeeId/*", "/coffee/*"]} component={NotFound} />
			</Switch>
		</Box>
	)
}
//"/*", "/chats/:chatId/*", "/chats/*"
export default Nav;
