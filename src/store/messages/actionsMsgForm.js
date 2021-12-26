import { msgsRef } from '../../firebase/firebase.js';

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

//!_Добавление сообщений в firebase
export const addMsgToFb = (message, chatId) => () => {
	msgsRef.child(chatId).push(message);
}
//!--------------------------------------------

//!_Добавление сообщений в Redux из firebase
export const onTrackingAddedMsgRedux = (chatId) => (dispatch) => {
	msgsRef.child(chatId).on('child_added', (snapshot) => {
		console.log(snapshot, snapshot.val(), snapshot.key);
		dispatch(createMessage({
			...snapshot.val(),
			id: snapshot.key
		}, chatId));
	});
};

export const offTrackingAddedMsgRedux = (chatId) => () => {
	msgsRef.child(chatId).off('child_added');
}
//!-------------------------------------

/**
 * @param {Object} message
 * @param {string} message.id
 */


export const deleteMessageByChat = (chatId) => ({
	type: DELETE_MSG_BY_CHAT,
	payload: chatId
});

//!Удаление сообщений из firebase
export const deleteMsgFromFb = (chatId) => (dispatch) => {
	msgsRef.child(chatId).remove(() => { 
		dispatch(deleteMessageByChat(chatId))
	});
}
//!----------------------------

//!_Удаление сообщений в Redux

export const onTrackingDeletedMsgRedux = (chatId) => (dispatch) => {
	msgsRef.child(chatId).on('child_removed', () => {
		dispatch(deleteMessageByChat(chatId));
	});
};

export const offTrackingDeletedMsgRedux = (chatId) => () => {
	msgsRef.child(chatId).off('child_removed');
};

//!---------------------------

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
		//!_Добавление Robot сообщений в Redux
		const timer1 = setTimeout(() => dispatch(createMessage(botMessage, chatId)), 1500);

		//!_Добавление Robot сообщений в firebase
		const timer2 = setTimeout(() => dispatch(addMsgToFb(botMessage, chatId)), 1500);
		
		return () => {clearTimeout(timer1, timer2)}; 
	}



