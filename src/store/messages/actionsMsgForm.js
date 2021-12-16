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
	payload: {message, chatId}
});

/**
 * @param {Object} message
 * @param {string} message.id
 */

export const deleteMessageByChat = (chatId) => ({
	type: DELETE_MSG_BY_CHAT,
	payload: chatId
}); 

