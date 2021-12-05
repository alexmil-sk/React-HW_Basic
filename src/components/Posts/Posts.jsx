import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_POSTS } from '../../helpers/chanceGen.js';

function Posts() {
	return (
		<div>
			<h1>Posts Title</h1>
			<ul>
				{MOCK_POSTS.map((item) => (
					<li key={item.id}>
						<Link to={`/posts/${item.id}`}>{item.id} : {item.title}</Link>
					</li>
				))}
			</ul>

		</div>
	)
}

export default Posts;
