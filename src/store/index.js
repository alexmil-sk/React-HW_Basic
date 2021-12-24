import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { messageReducer  } from './messages/reducerMsgForm.js';
import { chatReducer } from './chats/reducerChats.js';
import { reducerWineCatalog } from './wineCatalog/reducerWineCatalog.js';
import {userReducer} from './auth/reducerAuth.js';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

const persistConfig = {
	key: 'root',
	storage
}

const rootReducer = combineReducers({
	messages: messageReducer,
	chats: chatReducer,
	wineCatalog: reducerWineCatalog,
	auth: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);



export const store = createStore(
	persistedReducer,
	composeEnhancers(applyMiddleware(thunk)),
);

export const persistor = persistStore(store);