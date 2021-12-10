import { CHECKED_BOX } from './actionsProfile.js';

const initialState = {
	checkBox: false,
	
}

export const reducerProfile = (state = initialState, action) => {

	switch (action.type) {
		case CHECKED_BOX: 
			return {
				...state,
				checkBox: !state.checkBox,
			}
		default:
			return state;

	}
}