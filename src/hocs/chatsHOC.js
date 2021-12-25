import React, {
	useCallback,
	useEffect
} from 'react';
import {
	nanoid,
	customAlphabet
} from 'nanoid';
import {
	getChatList
} from '../store/chats/selectorsChats.js';
import {
	useSelector,
	useDispatch
} from "react-redux";
import {
	createChat,
	deleteChat,
	addChats
} from '../store/chats/actionsChats.js';
import {
	deleteMessageByChat
} from '../store/messages/actionsMsgForm.js';
import {
	addChatToFb,
	onTrackingAddedChatsRedux,
	offTrackingAddedChatsRedux,
	onTrackingDeletedChatsRedux,
	offTrackingDeletedChatsRedux,
	deleteChatFromFb
} from '../store/chats/actionsChats.js';



export const chatsHOC = (Component) => {

	return (props) => {
		const chats = useSelector(getChatList);

		const dispatch = useDispatch();


		const CustomNanoid = customAlphabet('УКЕНГЗХДЛОРПАВФЯСМИТБЮукенгзвапролджсмитбю', 7);
		const NewNanoidName = CustomNanoid();
		const NewNanoid = nanoid(8);


		//const addUserChat = useCallback(() => {
		//	dispatch(createChat({
		//		idx: Date.now(),
		//		id: NewNanoid,
		//		name: NewNanoidName,
		//		date: new Date().toLocaleDateString(),
		//		image: "https://cs8.pikabu.ru/avatars/1832/x1832143-2115011424.png"
		//	}));
		//}, [NewNanoid, NewNanoidName, dispatch])

		//!_Добавление чатов в firebase
		const addUserChat = useCallback(() => {
			dispatch(addChatToFb({
				//idx: Date.now(),
				//id: NewNanoid,
				name: NewNanoidName,
				date: new Date().toLocaleDateString(),
				image: "https://cs8.pikabu.ru/avatars/1832/x1832143-2115011424.png"
			}));
		}, [NewNanoidName, dispatch])

		//!_Удаление чатов в firebase
		const deleteUserChat = (e, chatId) => {
			e.preventDefault();
			dispatch(deleteChatFromFb(chatId));
			dispatch(deleteMessageByChat(chatId))
		}

		//!_Получение чатов из firebase в Redux
		useEffect(() => {
			dispatch(onTrackingAddedChatsRedux);
			dispatch(onTrackingDeletedChatsRedux);
			return () => {
		//!_Отписка от чатов из firebase в Redux
				dispatch(offTrackingAddedChatsRedux);
				dispatch(offTrackingDeletedChatsRedux);
			}
		}, [])

		return <Component {
			...props
		}
		chats = {
			chats
		}
		addUserChat = {
			addUserChat
		}
		deleteUserChat = {
			deleteUserChat
		}
		/>

	}
}