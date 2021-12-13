export const getMsgReducer = (state) => state.msgForm;
export const getMsg = (state) => getMsgReducer(state).messages;
export const getMsgError = (state) => getMsg(state).error;
export const getMsgLoading = (state) => getMsg(state).isLoading;