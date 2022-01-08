import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSavedTracks } from '../features/library/actions';
import { RootState } from '../store';
import { formatDistanceToNow } from 'date-fns';
import './styles/savedList.style.scss';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const SavedList = () => {
	const dispatch = useDispatch();

	const savedTracksSelector = useSelector((state: RootState) => state.library);

	useEffect(() => {
		dispatch(getSavedTracks());
	}, []);

	if (savedTracksSelector.playlist === 0) return <h5>loading..</h5>;

	return (
		<>
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
					savedTracksSelector?.playlist.map((track: any, index) => (
						<tr className='saved-list-table-card'>
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
							<td>{track.track.duration_ms}</td>
						</tr>
					))}
			</table>
		</>
	);
};

export default SavedList;
