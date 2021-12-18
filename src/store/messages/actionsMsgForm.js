export const CREATE_MSG = "CREATE_MSG";
export const DELETE_MSG_BY_CHAT = "DELETE_MSG_BY_CHAT";

/**
 * @param {Object} message;
 * @param {string} message.id;
 * @param {string} message.title;
 * @param {string} message.body;
 * @param {string} message.img;
 * @param {string} chatId;
 */

export const createMessage = (message, chatId) => ({
	type: CREATE_MSG,
	payload: {
		message,
		chatId
	}
});

/**
 * @param {Object} message
 * @param {string} message.id
 */

export const deleteMessageByChat = (chatId) => ({
	type: DELETE_MSG_BY_CHAT,
	payload: chatId
});


export const addRobotMsgThunk = (message, chatId) =>

	(dispatch) => {
		let botMessage = {};

		const haveBotMessage = ({
			idx,
			id,
			title,
			body,
			image
		}) => ({
			idx,
			id,
			title,
			body,
			image
		})
		dispatch(createMessage(message, chatId))

		if (message.id === undefined) {
			botMessage = haveBotMessage({
				idx: Date.now(),
				id: 'sckeleton',
				title: 'I n f o B o t',
				body: `Hi, WHO ARE YOU ???`,
				image: 'https://avatars.mds.yandex.net/i?id=d5cbec0c701f73502694dd515466cb5e-3070965-images-thumbs&ref=rim&//n=33&w=225&h=225'
			})
		} else if (message.id !== 'user') {
			botMessage = haveBotMessage({
				idx: Date.now(),
				id: 'sckeleton',
				title: 'I n f o B o t',
				body: `Hi, **${(message.id).toUpperCase()}** You are not a HUMAN! Man, if you wonna be a HUMAN sign your message as "USER"`,
				image: 'https://avatars.mds.yandex.net/i?id=d5cbec0c701f73502694dd515466cb5e-3070965-images-thumbs&ref=rim&//n=33&w=225&h=225'
			})
		} else {
			botMessage = haveBotMessage({
				idx: Date.now(),
				id: 'info-bot',
				title: 'I n f o B o t',
				body: `Hi, __ ${(message.id).toUpperCase()} __ I'm Botty around here!`,
				image: 'https://img2.freepng.ru/20180804/pso/kisspng-mobile-robot-stock-photography-image-illustration-%D8%AF%D8%B1%D8%A8%D8%A7%D8%B1%D9%87-%D9%85%D8%A7-%D8%B4%D8%B1%DA%A9%D8%AA-%D8%A2%D8%B1%D8%B3%D8%B3-5b65f6073773d3.7988520615334087752271.jpg'
			})
		}
		const timer = setTimeout(() => dispatch(createMessage(botMessage, chatId)), 
			1500);
		return () => {clearTimeout(timer)}; 
	}