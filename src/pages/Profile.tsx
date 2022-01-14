import './styles/saved.styled.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import TopArtists from '../components/TopArtists';
import { getMyTopTracks } from '../features/user-playlists/actions';
import Player from '../components/Player';
import { playTrack } from '../features/player/actions';

const Profile = () => {
	const dispatch = useDispatch();

	// Player state
	const [showPlayer, setPlayerState] = useState(false);

	// Auth and playlist state
	const currentUser = useSelector((state: RootState) => state);
	const myTopTracksSelector = useSelector(
		(state: RootState) => state.userPlaylists
	);

	const { user } = currentUser.authReducer;

	useEffect(() => {
		dispatch(getMyTopTracks());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (myTopTracksSelector.topPlaylist === 0) return <h3>loading..</h3>;

	return (
		<>
			{/* Display player */}
			{showPlayer === true ? <Player /> : ''}

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
				<div style={{ marginTop: '3vh', marginBottom: '2vh' }}>
					<h2>Top tracks this month</h2>
					<span style={{ fontSize: '12px' }}>Only visible to you</span>
				</div>
				<table id='saved-list-table'>
					<tr className='saved-list-table-title'>
						<th className='saved-list-table-index'>#</th>
						<th className='saved-list-table-title'>TITLE</th>
						<th className='saved-list-table-album'>ALBUM</th>
						<th className='saved-list-table-date'>DATE ADDED</th>
					</tr>

					{myTopTracksSelector &&
						myTopTracksSelector?.topPlaylist.map((item: any, index: number) => (
							<tr
								className='saved-list-table-card'
								onClick={() => {
									setPlayerState(true);
									dispatch(playTrack(item.id));
								}}
							>
								<td>{index + 1}</td>
								<td>
									<div style={{ display: 'flex', gap: '10px' }}>
										<img
											src={item.album.images[0].url}
											width={'35px'}
											alt='img'
										/>{' '}
										{item.name}
									</div>
								</td>
								<td>{item.name}</td>

								<td
									style={{
										position: 'absolute',
										fontWeight: '400',
										fontSize: '15px',
										color: '#B2B3B2',
									}}
								>
									{new Date(item.duration_ms).toISOString().substring(15, 19)}
								</td>
							</tr>
						))}
				</table>
			</div>
		</>
	);
};

export default Profile;
