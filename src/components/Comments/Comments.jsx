import React from 'react'
import { Box, Divider, Typography } from '@mui/material';
import { useParams, Redirect } from "react-router-dom";
import classes from './Comments.module.css';
import { MOCK_POSTS } from '../../helpers/chanceGen.js';



function Comments(props) {

	const { postId } = useParams();//! Достает из match.params одну из его характеристик: postId

	const post = MOCK_POSTS.find(item => item.id === postId);

	if (!post) {
		return <Redirect to="/posts" />;
	}

	if (!post.comments.length) {
		return <Typography color="primary">No Comments</Typography>
	}

	return (
		<>
			<Box>
				<Typography
					color="secondary"
					className={classes.mainTitle}
					variant="h3"
					sx={{ mt: 2, mb: 2 }}
				>Comments</Typography>
				{post.comments.map(item => (
					<div key={item.id}>
						<Typography color="secondary">
							<h3>{item.author}</h3>
							<h4>{item.authorEmail}</h4>
							<h4>{item.createAt}</h4>
						</Typography>
						<Typography color="primary">
							<p>{item.comment}</p>
						</Typography>
						<Divider/>
					</div>
				))}
			</Box>
		</>
	)
}

export default Comments;
