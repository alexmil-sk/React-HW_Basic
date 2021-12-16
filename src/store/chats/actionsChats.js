export const CREATE_CHAT = "CREATE_CHAT";
export const DELETE_CHAT = "DELETE_CHAT";
export const ADD_CHATS = "EDIT_CHAT";

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
