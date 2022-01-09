import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSavedTracks } from '../features/library/actions';
import { playTrack } from '../features/player/actions';
import { RootState } from '../store';
import { formatDistanceToNow } from 'date-fns';
import './styles/savedList.style.scss';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Player from './Player';

const SavedList = () => {
	// Player state
	const [showPlayer, setPlayerState] = useState(false);

	const dispatch = useDispatch();

	const savedTracksSelector = useSelector((state: RootState) => state.library);

	useEffect(() => {
		dispatch(getSavedTracks());
	}, []);

	if (savedTracksSelector.playlist === 0) return <h5>loading..</h5>;

	return (
		<>
			{showPlayer === true ? <Player /> : ''}
			<table id='saved-list-table'>
				<tr className='saved-list-table-title'>
					<th className='saved-list-table-index'>#</th>
					<th className='saved-list-table-title'>TITLE</th>
					<th className='saved-list-table-album'>ALBUM</th>
					<th className='saved-list-table-date'>DATE ADDED</th>
					<th>
						<AccessTimeIcon />
					</th>
				</tr>

				{savedTracksSelector &&
					savedTracksSelector?.playlist.map((track: any, index: number) => (
						<tr
							className='saved-list-table-card'
							onClick={() => {
								setPlayerState(true);
								dispatch(playTrack(track.track.id));
							}}
							//onClick={() => playTrack(track.track.id)}
							// onClick={() => {
							// 	window.open(track.track.preview_url);
							// }}
						>
							<td>{index + 1}</td>

							<td>
								<div style={{ display: 'flex', gap: '10px' }}>
									<img
										src={track.track.album.images[0].url}
										width={'35px'}
										alt='img'
									/>{' '}
									{track.track.name}
								</div>
							</td>
							<td>{track.track.album.name}</td>
							<td>
								{formatDistanceToNow(new Date(track.added_at), {
									addSuffix: true,
								})}
							</td>
							<td>
								{new Date(track.track.duration_ms)
									.toISOString()
									.substring(15, 19)}
							</td>
						</tr>
					))}
			</table>
		</>
	);
};

export default SavedList;
