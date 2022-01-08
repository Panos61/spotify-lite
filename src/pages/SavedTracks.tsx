import './styles/saved.styled.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSavedTracks } from '../features/library/actions';
import { setMe } from '../features/auth/actions';
import { RootState } from '../store';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SavedList from '../components/SavedList';
//import SavedList from '../components/SavedList';

const SavedTracks: React.FC = () => {
	const dispatch = useDispatch();
	const currentUser = useSelector((state: RootState) => state);

	const { user } = currentUser.authReducer;

	useEffect(() => {
		dispatch(getSavedTracks());
	}, []);

	return (
		<>
			<div className='saved-top-wrapper'>
				<div className='saved-top-image'>
					<FavoriteIcon style={{ fontSize: '120px' }} />
				</div>
				{/* <div className='saved-top-right'> */}
				<div className='saved-top-title'>
					<span
						style={{
							fontWeight: 'bold',
							fontSize: '11px',
							letterSpacing: '1px',
						}}
					>
						PLAYLIST
					</span>
					<span style={{ fontWeight: 'bolder', fontSize: '80px' }}>
						Liked Songs
					</span>

					<span style={{ display: 'flex', gap: '4px', marginBottom: '5px' }}>
						<img
							src={user && user.images[0].url}
							width={'25px'}
							alt='img'
							style={{ borderRadius: '15px' }}
						/>
						{user ? (
							<div
								style={{
									display: 'flex',

									fontWeight: 'bold',
									fontSize: '14px',
								}}
							>
								{user.display_name}
							</div>
						) : (
							''
						)}
						<span
							style={{ fontSize: '14px', fontWeight: '400', color: '#eeeeee' }}
						>
							- 45 songs
						</span>
					</span>
				</div>
			</div>

			{/* Saved List Component */}
			<SavedList />
		</>
	);
};

export default SavedTracks;
