import { createStore } from 'redux';
import { reducerProfile } from './profile/reducerProfile.js';

export const store = createStore(
	reducerProfile,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);