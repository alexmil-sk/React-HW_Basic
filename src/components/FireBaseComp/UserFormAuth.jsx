import React from 'react';
import { Button, Box, TextField, Alert } from '@mui/material';
import classes from './UserFormAuth.module.css';


function FormLogIn({ handleSubmit, handleEmailChange, handlePassChange, error }) {
	
	return (
		<Box
			component="form"
			sx={{
				'& .MuiTextField-root': { m: 1, width: '25ch' },
			}}
			Validate
			autoComplete="off"
			onSubmit={handleSubmit}
		>
			<div>
				<TextField
					primary
					className={classes.formElem}
					required
					type="email"
					label={("login").toUpperCase()}
					placeholder="User's login"
					helperText="Insert your login"
					onChange={handleEmailChange}
				/>
				<TextField
					className={classes.formElem}
					required
					type="password"
					label={("password").toUpperCase()}
					placeholder="User's password"
					helperText="Insert your password"
					onChange={handlePassChange}
				/>
			</div>
			{error && <Alert severity="error">{error.toString()}</Alert>}
			<Button
				className={classes.btnFormElem}
				variant="contained"
				type="submit"
			>Log In
			</Button>
		</Box>
	)
}

export default FormLogIn;