import {
	CREATE_CHAT,
	DELETE_CHAT,
	ADD_CHATS
} from './actionsChats.js';

//import usersArray from '../../source/db/chatDb.js';

const initialState = {
	chats: [],
	error: null,
	isLoading: null,
}

export const chatReducer = (state = initialState, action) => {

	switch (action.type) {
		case CREATE_CHAT: {
			return {
				chats: [
					...state.chats,
					action.payload
				]
			}
		}
		case DELETE_CHAT: {
			return {
				chats: state.chats.filter(chat => chat.id !== action.payload)
			}
		}
		case ADD_CHATS: {
			return {
				chats: [
					...state.chats,
					...action.payload
				],
			}
		}
		default:
			return state;
	}
}