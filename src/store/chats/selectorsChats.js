import compareById from "../../helpers/compareChats.js";

export const getChatReducer = (state) => state.chats;
export const getChatList = (state) => getChatReducer(state).chats;
export const getChatById = (chatId) => (state) => getChatList(state).filter(compareById(chatId));
export const hasChatById = (chatId) => (state) => getChatList(state).filter(compareById(chatId));
export const getChatError = (state) => getChatReducer(state).error;
export const getChatLoading = (state) => getChatReducer(state).isLoading;