import * as React from 'react';
import { Divider, Typography, Box, Card, CardContent, CardMedia } from '@mui/material';
//*===============================================================

export default function WineList({ wineItem }) {
	return (
		<Card sx={{
			maxWidth: 110,
			backgroundColor: 'hsl(37, 60%, 92%)',
			boxShadow: '0 0 10px 2px hsl(35, 100%, 55%)',
			padding: '10px',
			margin: '15px',
			color: '#fff',
		}}>
			<CardMedia
				height={350}
				component="img"
				image={wineItem.image}
				alt={wineItem.id}
			/>
			<CardContent>
				<Typography
					height={200}
					component="div"
					color="primary"
				>
					{wineItem.wine}
				</Typography>
				<Divider />
				<Typography
					height={150}
					variant="body2"
					color="text.secondary"
				>
					<div><span><strong>Winery:&nbsp;</strong></span></div>
					<div><span>{wineItem.winery}</span></div>
					<div><span><strong>Location:&nbsp;</strong></span></div>
					<div><span>{wineItem.location}</span></div>
				</Typography>
			</CardContent>
			<Divider />
			<Typography
				align="center"
				variant="subtitle2"
				component="p"
				color="secondary">
				<span><strong>Rating:&nbsp;</strong></span>
				{wineItem.rating.average}
			</Typography>
		</Card >
	);
}

// [
// 	{
// 		"winery": "Krug",
// 		"wine": "Clos d'Ambonnay Blanc de Noirs Brut Champagne 1995",
// 		"rating": {
// 			"average": "4.9",
// 			"reviews": "92 ratings"
// 		},
// 		"location": "France\n·\nChampagne",
// 		"image": "https://images.vivino.com/thumbs/DPq0ayGPR4SBeTDsYzLiiA_pb_x300.png",
// 		"id": 1
// 	}
// ]