import React from 'react'
import { TextField, Container, Box, Avatar, Typography, Button, Badge, ListItem, List } from '@mui/material';
import classes from './Comments.module.css';


function Comments() {
	return (
		<>
			<Box>
				<Typography
					color="secondary"
					className={classes.mainTitle}
					variant="h3"
					sx={{ mt: 2, mb: 2 }}
				>Comments</Typography>
			</Box>
		</>
	)
}

export default Comments;
