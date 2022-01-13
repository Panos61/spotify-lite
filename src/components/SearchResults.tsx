import './styles/searchResults.style.scss';
import { useState } from 'react';
import Player from './Player';
import { useDispatch } from 'react-redux';
import { playTrack } from '../features/player/actions';

const SearchResults = ({ track, index }) => {
	const dispatch = useDispatch();

	// Player state
	const [showPlayer, setPlayerState] = useState(false);

	return (
		<>
			{/* Display player on click */}
			{showPlayer === true ? <Player /> : ''}

			{/* ***** */}
			<div className='search-results-layout'>
				<div
					className='top-result'
					onClick={() => {
						setPlayerState(true);
						dispatch(playTrack(track.id));
					}}
				>
					{index === 0 ? (
						<div className='top-result-card'>
							<div>
								<img width={'40'} src={track.album.images[0].url} alt='img' />
							</div>

							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<span>{track.name}</span>
								<span
									style={{
										fontSize: '14px',
										fontWeight: '400',
										color: '#A0A0A1',
									}}
								>
									{track.artists[0].name}
								</span>
							</div>
						</div>
					) : (
						''
					)}
				</div>
				<div
					className='result-card'
					onClick={() => {
						setPlayerState(true);
						dispatch(playTrack(track.id));
					}}
				>
					{index >= 0 ? (
						<>
							<div>
								<img
									width={'40'}
									src={track.album.images[0].url}
									alt='track-img'
								/>
							</div>
							<div className='result-name'>
								<span>
									{track.name}
									<span
										style={{
											right: '15%',
											position: 'absolute',
											fontWeight: '400',
											fontSize: '15px',
											color: '#B2B3B2',
										}}
									>
										{new Date(track.duration_ms)
											.toISOString()
											.substring(15, 19)}
									</span>
								</span>

								<span
									style={{
										fontSize: '14px',
										fontWeight: '400',
										color: '#A0A0A1',
									}}
								>
									{track.artists[0].name}
								</span>
							</div>
						</>
					) : (
						''
					)}
				</div>
			</div>
		</>
	);
};

export default SearchResults;
