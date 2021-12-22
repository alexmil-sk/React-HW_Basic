import React from 'react';
import classes from './Nav.module.css';
import Coffee from '../../Coffee/Coffee.jsx';
import WineShopAPI from '../../WineShopAPI/WineShopAPI.jsx';
import CoffeeItem from '../../Coffee/CoffeeItem/CoffeeItem.jsx';
import Comments from '../../Comments/Comments.jsx';
import {Chats} from '../../Chats/Chats.jsx';
import Posts from '../../Posts/Posts.jsx';
import PostItem from '../../Posts/PostItem/PostItem.jsx';
import NotFound from '../../NotFound/NotFound.jsx';
import Profile from '../../Profile/Profile.jsx';
import Home from '../../Home/Home.jsx';
import Registration from '../../FireBaseComp/Registration.jsx';
import Login from '../../FireBaseComp/Login.jsx';
import { NavLink, Switch, Route } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box, } from '@mui/material';


function Nav({ show }) {
	return (
		<Box sx={{ flexGrow: 1 }}>
			
			{show ? <AppBar
				position="static"
			>
				<Toolbar>
					<Button
						variant="h6"
						sx={{ flexGrow: 1 }}
					>
						<NavLink
							exact
							to="/"
							className={isActive => !isActive ? classes.unselected : classes.active}
						>{('home').toUpperCase()}
						</NavLink>
					</Button>
					<Button variant="h6" sx={{ flexGrow: 1 }}>
						<NavLink
							to="/posts"
							className={isActive => !isActive ? classes.unselected : classes.active}
						>{('posts').toUpperCase()}
						</NavLink>
					</Button>
					<Button variant="h6" sx={{ flexGrow: 1 }}>
						<NavLink
							to="/chats"
							className={isActive => !isActive ? classes.unselected : classes.active}
						>{('chats').toUpperCase()}
						</NavLink>
					</Button>
					<Button variant="h6" sx={{ flexGrow: 1 }}>
						<NavLink
							to="/coffee"
							className={isActive => !isActive ? classes.unselected : classes.active}
						>{('coffee').toUpperCase()}
						</NavLink>
					</Button>
					<Button variant="h6" sx={{ flexGrow: 1 }}>
						<NavLink
							to="/wine"
							className={isActive => !isActive ? classes.unselected : classes.active}
						>{('WINE CATALOG').toUpperCase()}
						</NavLink>
					</Button>
					<Button variant="h6" sx={{ flexGrow: 1 }}>
						<NavLink
							to="/404"
							className={isActive => !isActive ? classes.unselected : classes.active}
						>{('PAGE 404').toUpperCase()}
						</NavLink>
					</Button>
				</Toolbar>
			</AppBar>
				: null}
			<Switch>
				<Route path="/" component={Home} exact/>
				<Route path="/coffee" component={Coffee} exact/>
				<Route path="/wine" component={WineShopAPI} exact/>
				<Route path="/coffee/:coffeeId" component={CoffeeItem}/>
				<Route path="/posts" component={Posts} exact/>
				<Route path="/posts/:postId" component={PostItem}/>
				<Route path="/chats" component={Chats}/>
				<Route path="/profile" component={Profile} exact/>
				<Route path="/login" component={Login} />
				<Route path="/registration" component={Registration} />
				<Route path="/posts/:postId/comments" component={Comments} />
				<Route path={["/*", "/chats/:chatId/*", "/chats/*", "/posts/:postId/*", "/posts/*", "/messages/*", "/coffee/:coffeeId/*", "/coffee/*", "/profile/*"]} component={NotFound} />
			</Switch>
		</Box>
	)
}
export default Nav;
