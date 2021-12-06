import React, { useState, useEffect } from 'react';
import './Coffee.css';
import { NavLink } from 'react-router-dom';
import { Box, Typography } from '@mui/material';


function Coffee() {


	const [items, setItems] = useState([]);

	const fetchItems = async () => {
		const data = await fetch('https://api.sampleapis.com/coffee/iced');

		const newItems = await data.json();
		console.log(newItems);
		setItems(newItems);
	}

	useEffect(() => {

		fetchItems();
	}, []);


	return (
		<Box>
			<Typography sx={{ textAlign: 'center' }} variant="h1" color="secondary">Coffee</Typography>
			<ul>
				<li key={Date.now()}>
					{items.map(item => (
						<Typography
							variant="h6"
							color="secondary"
						>
							<NavLink
								className="link"
								to={`/coffee/${item.id}`}>
								<Typography
									variant="h6"
									color="secondary"
								>
									{item.id}: {item.title}
								</Typography>
							</NavLink>
							<hr />
						</Typography>
					)
					)}
				</li>
			</ul>
		</Box>
	)
}

export default Coffee;
