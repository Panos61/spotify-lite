import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { getFeaturedPlaylists } from '../features/user-playlists/actions';
import FeaturedCard from './FeaturedCard';

const FeaturedPlaylists: React.FC = () => {
	const dispatch = useDispatch();
	const featuredPlaylistsSelector = useSelector(
		(state: RootState) => state.userPlaylists
	);

	useEffect(() => {
		dispatch(getFeaturedPlaylists());
	}, []);

	if (featuredPlaylistsSelector.playlists === 0) {
		return (
			<div>
				<h3>Loading..</h3>
			</div>
		);
	}

	return (
		featuredPlaylistsSelector &&
		featuredPlaylistsSelector?.playlists.map((item: any) => (
			<FeaturedCard item={item} key={item.id} />
		))
	);
};

export default FeaturedPlaylists;
