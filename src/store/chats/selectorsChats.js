export const getChatReducer = (state) => state;

export const getChat = (state) => getChatReducer(state).messages;
export const getChatError = (state) => getChatReducer(state).error;
export const getChatLoading = (state) => getChatReducer(state).isLoading;