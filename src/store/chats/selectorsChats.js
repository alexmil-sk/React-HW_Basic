export const getChatReducer = (state) => state.chats;

export const getChat = (state) => getChatReducer(state).chats;
export const getChatError = (state) => getChatReducer(state).error;
export const getChatLoading = (state) => getChatReducer(state).isLoading;