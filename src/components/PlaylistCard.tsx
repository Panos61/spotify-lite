import './styles/card.style.scss';
import { Card, CardActions, CardContent, CardMedia } from '@mui/material';

const PlaylistCard = ({ item }: any) => {
	return (
		<Card key={item.track.id} className='card'>
			<CardMedia
				component='img'
				image={item.track.album.images[0].url}
				height='180'
				alt='track-img'
			/>
			<CardContent className='card-content'>
				<span className='card-title'>{item.track.name}</span>
			</CardContent>
			<CardActions>
				<span className='card-sub' style={{ color: 'white' }}>
					{item.track.artists[0].name}
				</span>
			</CardActions>
		</Card>
	);
};

export default PlaylistCard;
