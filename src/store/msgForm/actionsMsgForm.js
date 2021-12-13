export const CREATE_MSG = "CREATE_MSG";
export const DELETE_MSG = "DELETE_MSG";
export const EDIT_MSG = "EDIT_MSG";

/**
 * @param {Object} message;
 * @param {string} message.id;
 * @param {string} message.title;
 * @param {string} message.body;
 * @param {string} message.img;
 */

export const createMessage = (message) => ({
	type: CREATE_MSG,
	payload: message
});

/**
 * @param {Object} message
 * @param {string} message.id
 */

export const deleteMessage = (messageId) => ({
	type: DELETE_MSG,
	payload: messageId
}); 

/**
 * @param {Object} message
 * @param {string} message.id
 * @param {string} message.title
 * @param {string} message.body
 * @param {string} message.img
 */

export const editMessage = (message) => ({
	type: EDIT_MSG,
	payload: message
});
