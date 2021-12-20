import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loader() {
	return (
		<Box
		>
			<CircularProgress
				sx={{ color: 'white', fontSize: 70, ml: 3 }}
			/>
		</Box>
	);
};
