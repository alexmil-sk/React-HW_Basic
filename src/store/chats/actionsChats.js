import {
	chatsRef
} from '../../firebase/firebase.js';

export const CREATE_CHAT = "CREATE_CHAT";
export const DELETE_CHAT = "DELETE_CHAT";
export const ADD_CHATS = "ADD_CHATS";


/**
 * @param {Object} chat;
 */
export const createChat = (chat) => ({
	type: CREATE_CHAT,
	payload: chat
});

/**
 * @param {Object} chat
 * @param {string} chat.id
 */

export const deleteChat = (chatId) => ({
	type: DELETE_CHAT,
	payload: chatId
});

/**
 * @param {Array} chats
 */
export const addChats = (chats) => ({
	type: ADD_CHATS,
	payload: chats
});

//*------------FIREBASE------------------------------------------------


//!_Добавление чатов в firebase
export const addChatToFb = (chat) => () => {
	chatsRef.push(chat);
}

//!_Получение чатов из firebase в Redux
export const onTrackingAddedChatsRedux = (dispatch) => {
	chatsRef.on('child_added', (snapshot) => {
		dispatch(createChat({
			...snapshot.val(),
			id: snapshot.key
		}));
	});
}

export const offTrackingAddedChatsRedux = () => {
	chatsRef.off('child_added');
}

//!_Удаление чатов из firebase
export const deleteChatFromFb = (chatId) => () => {
	chatsRef.child(chatId).remove((error) => {
		console.log(error);
	});
};

//!_Удаление чатов из Redux
export const onTrackingDeletedChatsRedux = (dispatch) => {
	chatsRef.on('child_removed', (snapshot) => {
		dispatch(deleteChat(snapshot.key));
	});
}

export const offTrackingDeletedChatsRedux = () => {
	chatsRef.off('child_removed');
}

