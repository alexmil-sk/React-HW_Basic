import {chatReducer} from './reducerChats.js';
import { createChat, deleteChat, addChats} from './actionsChats.js';

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

const newChats = [
	{
		name: 'Ivan',
		id: 222222
	},
	{
		name: 'Sergey',
		id: 333333
	},


];

const randomId = 111111;


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
	it('checks random chatId not deleting of chat', () => {
	//,Передача исходных данных в actionCreator
	const action = deleteChat(randomId)

	//,_Производим действие action
	const newState = chatReducer(initialState, action);

	//,_Ожидание по результатам теста
	expect(newState.chats.length).toBe(1);
	});
	it('checks adding o chats group', () => {
		//,Передача исходных данных в actionCreator
		const action = addChats(newChats)

		//,_Производим действие action
		const newState = chatReducer(initialState, action);

		//,_Ожидание по результатам теста
		expect(newState.chats.length).toBe(3);
	});
});