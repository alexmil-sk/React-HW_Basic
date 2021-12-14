import {
	CREATE_MSG,
	DELETE_MSG,
	EDIT_MSG
} from './actionsMsgForm.js';

const initialState = {
	messages: [],
	error: null,
	isLoading: null
}


export const messageReducer = (state = initialState, action) => {

	switch (action.type) {
		case CREATE_MSG: {
			return {
				...state,
				messages: [
					...state.messages,
					action.payload
				]
			}
		}
		case DELETE_MSG: {
			const newMessages = state.messages.filter(msg => msg.id !== action.payload);

			return {
				...state,
				messages: newMessages
			}
		}
		case EDIT_MSG: {
			const messageIdx = state.messages.findIndex(msg => msg.id === action.payload.id);
			if (messageIdx === -1) {
				return state
			}
			// const newArrMessages = [...state];
			const newArrMessages = [...state.messages];
			newArrMessages[messageIdx] = {
				...newArrMessages[messageIdx],
				...action.payload
			}
			return {
				...state,
				messages: newArrMessages,
			}
		}
		default:
			return state;
	}
}