import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Player = () => {
	const currentState = useSelector((state: RootState) => state);
	const { item } = currentState.playerReducer;
	console.log(item);

	return (
		<Card
			style={{
				height: '150px',
				bottom: '0',
				position: 'fixed',
				width: '75%',
				backgroundColor: '#181818',
				color: 'white',
			}}
		>
			<div>
				<CardContent style={{ color: 'white' }}>
					<div style={{ display: 'grid', placeItems: 'center' }}>
						<div style={{ display: 'flex', gap: '6px' }}>
							<img
								src={[item] && ([item[2]] as any)}
								width={'55px'}
								alt='album-img'
							/>
							<Typography
								component='h6'
								variant='h6'
								style={{ textAlign: 'center', color: 'white' }}
							>
								{[item] && [item[0]]}
							</Typography>
						</div>
					</div>
					<Typography variant='subtitle1' style={{ textAlign: 'center' }}>
						{[item] && [item[1]]}
					</Typography>
				</CardContent>
				<div
					style={{ color: 'white', textAlign: 'center', marginBottom: '30px' }}
				>
					<IconButton aria-label='previous' style={{ color: 'white' }}>
						<SkipNextIcon /> <SkipPreviousIcon />
					</IconButton>
					<IconButton
						aria-label='play/pause'
						style={{ color: 'white' }}
						onClick={() => {
							window.open([item[3]] as any);
						}}
					>
						<PlayArrowIcon />
					</IconButton>
					<IconButton aria-label='next' style={{ color: 'white' }}>
						<SkipPreviousIcon /> : <SkipNextIcon />
					</IconButton>
				</div>
			</div>
			;
			<CardMedia title='Live from space album cover' />
		</Card>
	);
};

export default Player;
