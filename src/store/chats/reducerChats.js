import {
	CREATE_CHAT,
	DELETE_CHAT,
	EDIT_CHAT
} from './actionsChats.js';

const initialState = {
	chats: [],
	error: null,
	isLoading: null
}


export const chatReducer = (state = initialState, action) => {

	switch (action.type) {
		case CREATE_CHAT: {
			return {
				...state,
				chats: [
					...state.chats,
					action.payload
				]
			}
		}
		case DELETE_CHAT: {
			const newChats = state.chats.filter(chat => chat.id !== action.payload);

			return {
				...state,
				chats: newChats
			}
		}
		case EDIT_CHAT: {
			const chatIdx = state.chats.findIndex(chat => chat.id === action.payload.id);
			if (chatIdx === -1) {
				return state
			}
			// const newArrMessages = [...state];
			const newArrChats = [...state.chats];
			newArrChats[chatIdx] = {
				...newArrChats[chatIdx],
				...action.payload
			}
			return {
				...state,
				chats: newArrChats,
			}
		}
		default:
			return state;
	}
}