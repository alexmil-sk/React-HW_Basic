import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Box, TextField, Typography } from '@mui/material';
import { auth } from '../../firebase/firebase.js';
import UserFormAuth from './UserFormAuth.jsx';


function Login() {
	const { push } = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState();
	const [error, setError] = useState('');

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	}

	const handlePassChange = (e) => {
		setPassword(e.target.value);
	}

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await auth.signInWithEmailAndPassword(email, password);
			//push('/');
		} catch (error) {
			setError(error.message);
		}
	}



	return (
		<Box>
			<Typography
				color="secondary"
				variant="h3"
				component="h3"
			>
				Log in
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
				Don't you have an account? <Link to="/registration">Registration</Link>
			</Typography>
		</Box>
	)
}

export default Login;
