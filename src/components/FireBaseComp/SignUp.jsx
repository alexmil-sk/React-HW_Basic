import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Box, TextField } from '@mui/material';
import { auth } from '../../firebase';

function SignUp() {

	const { push } = useHistory();
	const [email, setEmail] = useState('email');
	const [password, setPassword] = useState('password');
	const [error, setError] = useState('');

	const handlePassChange = (e) => {
		setPassword(e.target.value);
	};

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await auth.createUserWithEmailAndPassword(email, password);
		} catch (e) {
			setError(e.message);

		} finally {

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
		>
			<div>
				<TextField
					required
					id="outlined-required"
					label={("login").toUpperCase()}
				/>
				<TextField
					required
					id="outlined-required"
					label={("password").toUpperCase()}
				/>
			</div>
		</Box>
	)
}

export default SignUp
