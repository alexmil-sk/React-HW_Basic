import React from 'react'
import { Box, Typography} from '@mui/material';
import classes from './Messages.module.css';


function Messages() {
	return (
		<>
			<Box>
				<Typography
					color="secondary"
					className={classes.mainTitle}
					variant="h3"
					sx={{ mt: 2, mb: 2 }}
				>Messages</Typography>
			</Box>
		</>
	)
}

export default Messages;
