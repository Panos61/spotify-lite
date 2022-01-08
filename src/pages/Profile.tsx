import './styles/saved.styled.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { useEffect } from 'react';
import TopArtists from '../components/TopArtists';
import { getMyTopTracks } from '../features/user-playlists/actions';

const Profile = () => {
	const dispatch = useDispatch();

	const currentUser = useSelector((state: RootState) => state);
	const myTopTracksSelector = useSelector(
		(state: RootState) => state.userPlaylists
	);

	const { user } = currentUser.authReducer;

	useEffect(() => {
		dispatch(getMyTopTracks());
	}, []);

	if (myTopTracksSelector.topPlaylist === 0) return <h3>loading..</h3>;

	return (
		<>
			{user ? (
				<div
					className='saved-top-wrapper'
					style={{ backgroundColor: '#082557' }}
				>
					<div style={{ margin: '20px' }}>
						<img
							width={'190px'}
							src={user.images[0].url}
							alt='user-img'
							style={{ borderRadius: '300px' }}
						/>
					</div>

					<div className='saved-top-title'>
						<span
							style={{
								fontWeight: 'bold',
								fontSize: '11px',
								letterSpacing: '1px',
							}}
						>
							PROFILE
						</span>

						<span style={{ fontWeight: 'bolder', fontSize: '80px' }}>
							{user.display_name}
						</span>

						<span style={{ display: 'flex', gap: '4px' }}>
							<div
								style={{
									display: 'flex',
									fontWeight: '500',
									fontSize: '14px',
								}}
							>
								{user.followers.total} Follower
							</div>
						</span>
					</div>
				</div>
			) : (
				''
			)}
			<div className='profile-content'>
				<h2>Top artists this month</h2>
				<div className='profile-cards'>
					<TopArtists />
				</div>
				<table id='saved-list-table'>
					<tr className='saved-list-table-title'>
						<th className='saved-list-table-index'>#</th>
						<th className='saved-list-table-title'>TITLE</th>
						<th className='saved-list-table-album'>ALBUM</th>
						<th className='saved-list-table-date'>DATE ADDED</th>
					</tr>
					{/* 
					{myTopTracksSelector &&
						myTopTracksSelector?.topPlaylist.map((item: any, index: number) => (
							<tr className='saved-list-table-card'>
								<td>{index + 1}</td>
								<td>
									<div style={{ display: 'flex', gap: '10px' }}>
										<img
											src={item.album.images[0].url}
											width={'35px'}
											alt='img'
										/>{' '}
										{item.item.name}
									</div>
								</td>
								<td>{item.item.name}</td>

								<td>{item.item.duration_ms}</td>
							</tr>
						))} */}
				</table>
			</div>
		</>
	);
};

export default Profile;
