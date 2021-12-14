export const CREATE_CHAT = "CREATE_CHAT";
export const DELETE_CHAT = "DELETE_CHAT";
export const EDIT_CHAT = "EDIT_CHAT";

/**
 * @param {Object} chat;
 * @param {string} chat.id;
 * @param {string} chat.name;
 * @param {string} chat.image;
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
 * @param {Object} chat
 * @param {string} chat.id
 * @param {string} chat.name
 * @param {string} chat.image
 */

export const editMessage = (chat) => ({
	type: EDIT_CHAT,
	payload: chat
});
