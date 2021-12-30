import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsAuth, initAuthAction } from '../../../store/user/reducerAuth.js';
import { PublicRoute } from '../../../hocs/PublicRoute.js';
import { PrivateRoute } from '../../../hocs/PrivateRoute.js';
import classes from './Nav.module.css';
import Coffee from '../../Coffee/Coffee.jsx';
import WineShopAPI from '../../WineShopAPI/WineShopAPI.jsx';
import CoffeeItem from '../../Coffee/CoffeeItem/CoffeeItem.jsx';
import Comments from '../../Comments/Comments.jsx';
import { Chats } from '../../Chats/Chats.jsx';
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

	const isAuth = useSelector(getIsAuth);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(initAuthAction);
	}, []);

	return (
		<Box sx={{ flexGrow: 1 }}>

			{show ? <AppBar
				position="static"
			>
				<Toolbar data-testId="toolbar">
					<Button
						variant="h6"
						sx={{ flexGrow: 1 }}
					>
						<NavLink
							data-testId="home-link"
							exact
							to="/"
							className={isActive => !isActive ? classes.unselected : classes.active}
						>{('home').toUpperCase()}
						</NavLink>
					</Button>
					<Button variant="h6" sx={{ flexGrow: 1 }}>
						<NavLink
							data-testId="posts-link"
							to="/posts"
							className={isActive => !isActive ? classes.unselected : classes.active}
						>{('posts').toUpperCase()}
						</NavLink>
					</Button>
					<Button variant="h6" sx={{ flexGrow: 1 }}>
						<NavLink
							data-testId="chats-link"
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
				<PrivateRoute auth={isAuth} exact path="/">
					<Home />
				</PrivateRoute>
				<PrivateRoute auth={isAuth} exact path="/coffee">
					<Coffee />
				</PrivateRoute>
				<PrivateRoute auth={isAuth} exact path="/wine">
					<WineShopAPI />
				</PrivateRoute>
				<PrivateRoute auth={isAuth} path="/coffee/:coffeeId">
					<CoffeeItem />
				</PrivateRoute>
				<PrivateRoute auth={isAuth} exact path="/posts">
					<Posts />
				</PrivateRoute>
				<PrivateRoute auth={isAuth} path="/posts/:postId">
					<PostItem />
				</PrivateRoute>
				<PrivateRoute auth={isAuth} path="/posts/:postId/comments">
					<Comments />
				</PrivateRoute>
				<PrivateRoute auth={isAuth} path="/chats">
					<Chats />
				</PrivateRoute>
				<PrivateRoute auth={isAuth} exact path="/profile">
					<Profile />
				</PrivateRoute>
				<PublicRoute auth={isAuth} path="/login">
					<Login />
				</PublicRoute>
				<PublicRoute auth={isAuth} path="/registration">
					<Registration />
				</PublicRoute>
				<PrivateRoute auth={isAuth} path={["/*", "/chats/:chatId/*", "/chats/*", "/posts/:postId/*", "/posts/*", "/messages/*", "/coffee/:coffeeId/*", "/coffee/*", "/profile/*"]}>
					<NotFound />
				</PrivateRoute>
		</Switch>
		</Box >
	)
}
export default Nav;
