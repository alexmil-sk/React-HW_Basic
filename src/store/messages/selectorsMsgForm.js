export const getMsgReducer = (state) => state.messages || {};

export const getMsg = (state) => getMsgReducer(state).messages || {};
export const getMsgId = (chatId) => (state) => getMsg(state)[chatId] || [];
export const getMsgError = (state) => getMsgReducer(state).error;
export const getMsgLoading = (state) => getMsgReducer(state).isLoading;