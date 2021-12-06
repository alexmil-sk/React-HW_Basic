import React from 'react';
import './PostItem.css';
import Comments from '../../Comments/Comments.jsx';
import { useParams, Redirect, NavLink, Switch, Route } from "react-router-dom";
import { Box, Typography, IconButton } from '@mui/material';
import { MOCK_POSTS } from '../../../helpers/chanceGen.js';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import MoreIcon from '@mui/icons-material/More';





function PostItem(props) {
	const { postId } = useParams();//! Достает из match.params одну из его характеристик: postId

	const post = MOCK_POSTS.find(item => item.id === postId);

	if (!post) {
		return <Redirect to="/posts" />;
	}

	return (
		<Box>
			<NavLink
				className="commentLink"
				to={`/posts`}>
				<IconButton color="secondary">
					<MoreIcon fontSize="large" />
				</IconButton>
				<Typography
					variant="h6"
					color="secondary"
					sx={{ display: 'inline-block', padding: 0 }}
				>
					BACK TO POSTS LIST
				</Typography>
			</NavLink>
			<Typography color="primary">
				<Typography sx={{ textAlign: 'center' }} variant="h3" color="secondary">{post.title}</Typography>
				<h4>ID: {post.id}</h4>
				<h4>AUTHOR: {post.author}</h4>
				<h4>DATE: {post.createAt}</h4>
				<p>{post.content}</p>
			</Typography>
			<NavLink
				className="link unactive"
				to={`/posts/${postId}/comments`}>
				<IconButton color="inherit">
					<QuestionAnswerIcon fontSize="large" />
				</IconButton>
				<Typography
					variant="h6"
					color="secondary"
					sx={{ display: 'inline-block' }}
				>
					READ COMMENTS
				</Typography>
			</NavLink>
			<Switch>
				<Route path="/posts/:postId/comments" component={Comments} />
			</Switch>
		</Box>
	)
}

export default PostItem;
