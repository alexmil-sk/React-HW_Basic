export const getMsgReducer = (state) => state;

export const getMsg = (state) => getMsgReducer(state).messages;
export const getMsgError = (state) => getMsgReducer(state).error;
export const getMsgLoading = (state) => getMsgReducer(state).isLoading;