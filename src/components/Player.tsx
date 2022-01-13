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
	// Use redux state
	const currentState = useSelector((state: RootState) => state);
	const { item } = currentState.playerReducer;

	// Inline style for player card component
	const inlinePlayerCardStyle = {
		height: '150px',
		bottom: '0',
		position: 'fixed',
		width: '75%',
		backgroundColor: '#181818',
		color: 'white',
		borderRadius: '20px',
		zIndex: 10,
	} as React.CSSProperties;

	return (
		<Card style={inlinePlayerCardStyle}>
			<CardContent style={{ color: 'white' }}>
				<div style={{ display: 'grid', placeItems: 'center' }}>
					<div style={{ display: 'flex', gap: '10px' }}>
						<img
							src={[item] && ([item[2]] as any)}
							width={'55px'}
							alt='album-img'
							style={{ right: '10px', position: 'relative' }}
						/>
						<Typography
							component='h6'
							variant='h6'
							style={{
								textAlign: 'center',
								color: 'white',
							}}
						>
							{[item] && [item[0]]}
						</Typography>
					</div>
					<Typography
						variant='subtitle1'
						style={{ textAlign: 'center', bottom: '5px' }}
					>
						{[item] && [item[1]]}
					</Typography>
				</div>
				<div
					style={{
						color: 'white',
						textAlign: 'center',
						bottom: '5px',
						position: 'relative',
					}}
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
			</CardContent>
		</Card>
	);
};

export default Player;
