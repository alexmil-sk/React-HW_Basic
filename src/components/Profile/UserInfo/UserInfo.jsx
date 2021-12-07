import React from 'react';
import classes from './UserInfo.module.css';
import { Typography } from '@mui/material';


function UserInfo() {
	return (
		<div>
			<Typography sx={{ textAlign: 'center' }} variant="h2" color="secondary">User Info</Typography>
		</div>
	)
}

export default UserInfo;
