import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Box, Card, CardContent, CardMedia, Button, IconButton } from '@mui/material';
//*===============================================================
import WineList from './WineList.jsx';
import { getLoading, getError, getDataWine } from '../../store/wineCatalog/selectorsWineCatalog.js';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import { getWineCatalogThunk } from '../../store/wineCatalog/actionsWineCatalog.js';
import Error from './Error.jsx';
import Loader from './Loader.jsx';
import useFetchData from './hooks/useFetchData.jsx';

const WINE_API = 'https://api.sampleapis.com/wines/sparkling';



export default function WineShopAPI() {

	//*======================================================
	const { loading,
		error,
		data,
		getData } = useFetchData(WINE_API)

	// const isLoading = useSelector(getLoading);
	// const isError = useSelector(getError);
	// const dataWine = useSelector(getDataWine);

	// const dispatch = useDispatch();

	// const getSomeWine = () => {
	// 	dispatch(getWineCatalogThunk);
	// }

	// useEffect(() => {
	// 	getSomeWine();
	// }, []);
//*==========================================================
	useEffect(() => {
		getData();
	}, []);


	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}>
			<Typography
				mt={5}
				mb={5}
				align="center"
				variant="h3"
				component="h3"
				color="text.primary"
			>
				Inthernet Wine Catalog
			</Typography>
			{
				error ? <Error getSomeWine={getData} /> :
					(<Button
						mt={10}
						variant="contained"
						size="large"
						color="secondary"
					>

						<IconButton onClick={getData}>
							<CloudDownloadOutlinedIcon
								size="large"
								sx={{ color: 'white', fontSize: 50 }}
							/>
							{
								loading &&
								<Loader sx={{ color: '#fff!important', fontSize: 50 }} />
							}
						</IconButton>
					</Button>)
			}
			<Box
				sx={{
					display: 'inline-grid',
					padding: '20px',
					gridTemplateColumns: 'repeat(10,1fr)',
					margin: '40px auto',
					boxShadow: (!loading && !error) ? '0 0 15px 5px #9C27B0' : null,
				}}
			>
				{
					!loading && data.length > 0 &&
					data.map(wineItem => <WineList wineItem={wineItem} />)
				}
			</Box>

		</Box>
	);
}

