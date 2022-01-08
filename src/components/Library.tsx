import { Link } from 'react-router-dom';
import './styles/library.style.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useDispatch, useSelector } from 'react-redux';
import { getSavedPlaylists } from '../features/library/actions';
import { RootState } from '../store';
import React, { useEffect } from 'react';
import { CardMedia, CardActions } from '@mui/material';

const Library: React.FC = () => {
	const cardStyle = {
		width: '100px',
		height: '80px',
		backgroundColor: '#1a1a1a !important',
		marginLeft: '20px',
		color: 'white !important',
	};

	const dispatch = useDispatch();
	const librarySelector = useSelector((state: RootState) => state.library);

	useEffect(() => {
		dispatch(getSavedPlaylists());
	}, []);

	if (librarySelector.playlists.items === 0) {
		return <h3>Loading..</h3>;
	}
	return (
		<>
			<Link to='/collection/tracks' style={{ textDecoration: 'none' }}>
				<Card className='library-card'>
					<div className='library-card-content'>
						<p>A list of your favorite tracks </p>

						<span
							style={{
								fontWeight: 'bold',
								fontSize: '30px',
							}}
						>
							Liked Songs
						</span>
						<p>45 liked songs</p>
					</div>
				</Card>
			</Link>

			{librarySelector &&
				librarySelector?.playlists.map((album: any) => (
					<div>
						<Card
							key={album.album.id}
							className='card'
							style={{ height: '16.5rem' }}
						>
							<CardMedia
								component='img'
								image={album.album.images[0].url}
								height='180'
								alt='track-img'
							/>
							<CardContent className='card-content'>
								<span className='card-title'>{album.album.name}</span>
							</CardContent>
						</Card>
					</div>
				))}
		</>
	);
};

export default Library;
