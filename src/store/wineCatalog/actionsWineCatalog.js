export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_DATA = 'SET_DATA';


export const setLoading = (status) => ({
	type: SET_LOADING,
	payload: status
});
export const setError = (status) => ({
	type: SET_ERROR,
	payload: status
});
export const setData = (data) => ({
	type: SET_DATA,
	payload: data
});


	//const types = {
	//	wine1: 'sparkling',
	//	wine2: 'reds',
	//	wine3: 'whites',
	//	wine4: 'rose',
	//	wine5: 'dessert',
	//	wine6: 'port'
	//};

const WINE_API = 'https://api.sampleapis.com/wines/sparkling';
//const WINE_API = 'https://api.sampleapis.com/wines/reds';
//const WINE_API = 'https://api.sampleapis.com/wines/whites';
//const WINE_API = 'https://api.sampleapis.com/wines/rose';
//const WINE_API = 'https://api.sampleapis.com/wines/dessert';
//const WINE_API = 'https://api.sampleapis.com/wines/port';


export const getWineCatalogThunk = async (dispatch) => {

	dispatch(setLoading(true));
	dispatch(setError(false));
	dispatch(setData([]));

	try {
		const response = await fetch(WINE_API);

		if (!response.ok) {
			throw new Error(`Request failed with status ${response.status}`)
		}
		const result = await response.json();
		console.error(result);
		dispatch(setData(result))
	} catch (err) {
		console.log(err);
		dispatch(setError(true));
	} finally {
		console.log('cleanup');
	}
	dispatch(setLoading(false));
};
