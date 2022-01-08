import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { getRecentlyPlayed } from '../features/user-playlists/actions';
import PlaylistCard from './PlaylistCard';

const RecentPlaylist: React.FC = () => {
	const dispatch = useDispatch();
	const recentPlaylistSelector = useSelector(
		(state: RootState) => state.userPlaylists
	);

	useEffect(() => {
		dispatch(getRecentlyPlayed());
	}, []);

	if (recentPlaylistSelector.playlist.items === 0) {
		return (
			<div>
				<h3>Loading..</h3>
			</div>
		);
	}
	return (
		recentPlaylistSelector &&
		recentPlaylistSelector?.playlist.map((item: any) => (
			<PlaylistCard item={item} key={item.track.id} />
		))
	);
};

export default RecentPlaylist;
