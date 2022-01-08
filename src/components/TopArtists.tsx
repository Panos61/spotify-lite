import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { getTopArtists } from '../features/user-playlists/actions';
import ArtistCard from './ArtistCard';

const TopArtists: React.FC = () => {
	const dispatch = useDispatch();
	const topArtistsSelector = useSelector(
		(state: RootState) => state.userPlaylists
	);

	useEffect(() => {
		dispatch(getTopArtists());
	}, []);

	if (topArtistsSelector.artists.items === 0) {
		return (
			<div>
				<h3>Loading..</h3>
			</div>
		);
	}

	return (
		topArtistsSelector &&
		topArtistsSelector?.artists.map((item: any) => (
			<ArtistCard item={item} key={item.id} />
		))
	);
};

export default TopArtists;
