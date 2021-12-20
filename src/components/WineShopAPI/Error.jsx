import React from 'react';
import { Alert, IconButton } from '@mui/material';
import CloudSyncIcon from '@mui/icons-material/CloudSync';


function Error({ getSomeWine }) {
	return (
		<Alert severity="error">
			Ошибка загрузки!
			<IconButton onClick={getSomeWine}>
				<CloudSyncIcon
					size="large"
					color="secondary"
					sx={{ fontSize: 50 }}
				/>
			</IconButton>
		</Alert>
	)
}

export default Error;
