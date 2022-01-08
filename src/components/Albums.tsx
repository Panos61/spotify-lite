import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getnewAlbums } from '../features/user-playlists/actions';
import { RootState } from '../store';
import CategoryCard from './AlbumsCard';

const Categories: React.FC = () => {
	const dispatch = useDispatch();
	const newReleasesSelector = useSelector(
		(state: RootState) => state.userPlaylists
	);

	useEffect(() => {
		dispatch(getnewAlbums());
	}, []);

	if (newReleasesSelector.albums.items === 0) {
		return (
			<div>
				<h3>Loading..</h3>
			</div>
		);
	}

	return (
		newReleasesSelector &&
		newReleasesSelector?.albums.map((item: any) => (
			<CategoryCard item={item} key={item.id} />
		))
	);
};

export default Categories;
