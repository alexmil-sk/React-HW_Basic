import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { auth } from '../../firebase/firebase.js';
import UserFormAuth from './UserFormAuth.jsx';

function Registration() {

	const { push } = useHistory();
	const [email, setEmail] = useState('email');
	const [password, setPassword] = useState('password');
	const [error, setError] = useState('');


	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePassChange = (e) => {
		setPassword(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		try {
			await auth.createUserWithEmailAndPassword(email, password);

			//push('/');
		} catch (error) {
			setError(error.message);
		}
	};

	return (
		<Box
			component="form"
			sx={{
				'& .MuiTextField-root': { m: 1, width: '25ch' },
			}}
			noValidate
			autoComplete="off"
			onSubmit={handleSubmit}
		>
			<Typography
				variant="h3"
				component="h3"
				color="secondary"

			>
				Registration
			</Typography>
			<UserFormAuth
				handleEmailChange={handleEmailChange}
				handlePassChange={handlePassChange}
				handleSubmit={handleSubmit}
				error={error}
			/>
			<hr />
			<Typography
				color="primary"
				variant="h6"
				component="h6"
			>
				Do you have an account? <Link to="/login">Login</Link>
			</Typography>
		</Box>
	)
}

export default Registration;
