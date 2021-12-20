import React, { useCallback, useState} from 'react'

function useFetchData(url) {


	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [data, setData] = useState([]);

	const getData = useCallback(async () => {
		try {
			setLoading(true);
			setError(false);
			setData([]);

			const response = await fetch(url);

			if (!response.ok) {
				throw new Error(`Request failed with status ${response.status}`)
			}
			const result = await response.json();
			console.log(result);

			setData(result);
		} catch (err) {
			console.log(err);
			setError(true);
		} finally {
			console.log('cleanup');
		}
		setLoading(false);
	}, [url])


	return {
		loading,
		error,
		data,
		getData
	}
}

export default useFetchData;
