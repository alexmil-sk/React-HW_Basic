import chance from "chance";

export const createComment = () => ({
	id: chance().fbid(),
	createAt: chance().date({
		string: true,
		american: false
	}),
	author: chance().name(),
	authorEmail: chance().email(),
	comment: chance().paragraph()
});

export const createPost = () => {
	const commentsCount = chance().integer({
		min: 0,
		max: 5
	});
	return {
		id: chance().fbid(),
		createAt: chance().date({
			string: true,
			american: false
		}),
		author: chance().name(),
		title: chance().sentence(),
		content: chance().paragraph({ sentences: 2 }),
		commentsCount,
		comments: Array.from({
			length: commentsCount
		}).map(createComment)
	};
};

export const createPosts = (count) =>
	Array.from({ length: count }).map(createPost);

export const MOCK_POSTS = createPosts(5);