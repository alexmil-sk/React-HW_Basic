import React, { useCallback, useEffect } from 'react';
import { nanoid, customAlphabet } from 'nanoid';
import { getChatList } from '../store/chats/selectorsChats.js';
import { useSelector, useDispatch } from "react-redux";
import { createChat, deleteChat, addChats } from '../store/chats/actionsChats.js';
import { deleteMessageByChat } from '../store/messages/actionsMsgForm.js';
import { chatUsersArray } from '../source/db/chatDb.js';



export const chatsHOC = (Component) => {
		
	return (props) => {
		const chats = useSelector(getChatList);

		const dispatch = useDispatch();


		const CustomNanoid = customAlphabet('УКЕНГЗХДЛОРПАВФЯСМИТБЮукенгзвапролджсмитбю', 7);
		const NewNanoidName = CustomNanoid();
		const NewNanoid = nanoid(8);


		const addUserChat = useCallback(() => {
			dispatch(createChat({
				idx: Date.now(),
				id: NewNanoid,
				name: NewNanoidName,
				date: new Date().toLocaleDateString(),
				image: "https://cs8.pikabu.ru/avatars/1832/x1832143-2115011424.png"
			}));
		}, [NewNanoid, NewNanoidName, dispatch])

		const deleteUserChat = (e, chatId) => {
			e.preventDefault();
			dispatch(deleteChat(chatId));
			dispatch(deleteMessageByChat(chatId))
		}

		useEffect(() => {
			dispatch(addChats(chatUsersArray))
		}, [])

		const addAllChats = useCallback((e) => {
			e.preventDefault();
			dispatch(addChats(chatUsersArray))
		}, []);


		return <Component
			{...props}
			chats={chats}
			addUserChat={addUserChat}
			deleteUserChat={deleteUserChat}
			addAllChats={addAllChats}
		/>

	}
}
