export const getWineCatalog = (state) => state.wineCatalog;
export const getDataWine = (state) => getWineCatalog(state).data;
export const getLoading = (state) => getWineCatalog(state).isLoading;
export const getError = (state) => getWineCatalog(state).isError;