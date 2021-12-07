import React from 'react';
import './Posts.css';
import { NavLink } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

import { MOCK_POSTS } from '../../helpers/chanceGen.js';

function Posts() {
	return (
		<Box>
			<Typography sx={{ textAlign: 'center' }} variant="h1" color="secondary">Posts</Typography>
			<ul>
				{MOCK_POSTS.map((item) => (
					<li key={item.id}>
						<Typography
							variant="h6"
							color="secondary"
							
						>
							<NavLink className="link"
								to={`/posts/${item.id}`}>
								<Typography
									variant="h6"
									color="secondary"
								>
									/ {item.id} / {item.title}
								</Typography>
							</NavLink>
							<hr />
						</Typography>
					</li>
					))}
			</ul>
		</Box>
	)
}

export default Posts;
