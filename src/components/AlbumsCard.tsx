import './styles/card.style.scss';
import { Card, CardActions, CardContent, CardMedia } from '@mui/material';

const CategoryCard = ({ item }: string | any) => {
	return (
		<Card key={item.id} className='card'>
			<CardMedia
				component='img'
				image={item.images[0].url}
				height='180'
				alt='track-img'
			/>
			<CardContent className='card-content'>
				<span className='card-title'>{item.name}</span>
			</CardContent>

			<CardActions>
				<span className='card-sub'>{item.album_type}</span>
			</CardActions>
		</Card>
	);
};

export default CategoryCard;
