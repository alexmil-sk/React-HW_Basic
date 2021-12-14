import { combineReducers, createStore } from 'redux';
import { messageReducer  } from './msgForm/reducerMsgForm.js';
import { chatReducer  } from './chats/reducerChats.js';

export const store = createStore(
	combineReducers({
		msgForm: messageReducer,
		chats: chatReducer
}),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);