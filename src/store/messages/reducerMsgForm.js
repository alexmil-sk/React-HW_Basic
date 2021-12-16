import {
	CREATE_MSG,
	DELETE_MSG_BY_CHAT,
} from './actionsMsgForm.js';

const initialState = {
	messages: {},
	error: null,
	isLoading: null
}


export const messageReducer = (state = initialState, action) => {

	switch (action.type) {
		case CREATE_MSG: {
			const { message, chatId } = action.payload;
			const newMessages = { ...state.messages };
			newMessages[chatId] = [
				...(newMessages[chatId] || []),
				message,
			]
				return {
				messages: newMessages
			}
		}
		case DELETE_MSG_BY_CHAT: {
			if (!state.messages.hasOwnProperty(action.payload)) {
				return state
			}
			const newMessages = { ...state.messages };
			delete newMessages[action.payload];

			return {
				messages: newMessages
			}
		}

			//*_Редактирование не выполнялось
		// case EDIT_MSG: {
		// 	const messageIdx = state.messages.findIndex(msg => msg.id === action.payload.id);
		// 	if (messageIdx === -1) {
		// 		return state
		// 	}
		// 	// const newArrMessages = [...state];
		// 	const newArrMessages = [...state.messages];
		// 	newArrMessages[messageIdx] = {
		// 		...newArrMessages[messageIdx],
		// 		...action.payload
		// 	}
		// 	return {
		// 		...state,
		// 		messages: newArrMessages,
		// 	}
		// }
		default:
			return state;
	}
}