import React, { useState, useEffect, useParams } from 'react';
import './CoffeeItem.css';
import { NavLink, Redirect} from 'react-router-dom';
import { Box, Typography, IconButton } from '@mui/material';
import MoreIcon from '@mui/icons-material/More';

function CoffeeItem({match}) {

	const [item, setItem] = useState([]);

	const fetchItem = async () => {
		const dataItem = await fetch(`https://api.sampleapis.com/coffee/iced/${match.params.coffeeId}`);

		const singleItem = await dataItem.json();
		setItem(singleItem);
	}
	useEffect(() => {
		fetchItem();
		
	}, []);


	return (
		<Box>
			<NavLink
				className="link unactive"
				to={`/coffee`}>
				<IconButton color="secondary">
					<MoreIcon fontSize="large" />
				</IconButton>
				<Typography
					variant="h6"
					color="secondary"
					sx={{display: 'inline-block', padding: 0}}
				>
					BACK TO COFFEE LIST 
				</Typography>
			</NavLink>
			<Typography color="primary">
				<Typography sx={{ textAlign: 'center' }} variant="h2" color="secondary">{item.title}</Typography>
				<h4>Ingredients:</h4>
				<p>
					{
					Array.isArray(item.ingredients) ? 
						(item.ingredients).join(' / ') : item.ingredients
				}
				</p>
				<h4>Description:</h4>
				<p>{item.description}</p>
			</Typography>
		</Box>
	)
}

export default CoffeeItem;
