import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {chatReducer} from './reducerChats.js';
import { createChat, deleteChat, addChats} from './actionsChats.js';
import chatsHOC from '../../hocs/chatsHOC.js';

//*=================================================================

//,_Подготовка исходных данных (исходный State)
const initialState = {
	chats: [
		{
			name: 'John',
			id: 654321
		}
	],
}

const chat = {
	name: 'Peter',
	id: 123456
};



describe('chatReducer test', () => {
	it('checks chats addings to the initialState', () => { 

		//,Передача исходных данных в actionCreator
		const action = createChat(chat);

		//,_Производим действие action
		const newState = chatReducer(initialState, action);

		//,_Ожидание по результатам теста
		expect(newState.chats.length).toBe(2);
	});
	it('checks chats user`s name have added to the initialState', () => {
		//,Передача исходных данных в actionCreator
		const action = createChat(chat);

		//,_Производим действие action
		const newState = chatReducer(initialState, action);

		//,_Ожидание по результатам теста
		expect(newState.chats[1].name).toBe('Peter');
	});
	it('checks deleting of chats', () => {
		//,Передача исходных данных в actionCreator
		const action = deleteChat(chat.id)

		//,_Производим действие action
		const newState = chatReducer(initialState, action);

		//,_Ожидание по результатам теста
		expect(newState.chats.length).toBe(1);
	});
});