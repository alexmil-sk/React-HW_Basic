import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getIsAuth, initAuthAction } from '../../store/auth/reducerAuth.js';
import { PublicRoute } from '../../hocs/PublicRoute.js';
import { PrivateRoute } from '../../hocs/PrivateRoute.js';
import Login from './Login.jsx';
import Registration from './Registration.jsx';
import Profile from '../Profile/Profile.jsx';

export function AccessAuthRoute() {

	const isAuth = useSelector(getIsAuth);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(initAuthAction);
	},[]);

	return (
		<Switch>
			<PublicRoute
				auth={isAuth}
				path={"/login"}
				component={() => <Login />}
			/>
			<PublicRoute auth={isAuth} path={"/registration"} component={Registration} />
			<PrivateRoute auth={isAuth} path={"/profile"} component={Profile} />
		</Switch>
	);
};

