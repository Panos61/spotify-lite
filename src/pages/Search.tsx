import './styles/search.style.scss';
import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { search } from '../features/search/actions';
import RecentPlaylist from '../components/RecentPlaylist';
import { RootState } from '../store';
import SearchResults from '../components/SearchResults';

const Search = () => {
	const dispatch = useDispatch();
	const [searchTerm, setSearchTerm] = useState('');

	// Search selector - Redux state
	const searchTracksSelector = useSelector(
		(state: RootState) => state.searchReducer
	);

	// Search input functions
	const handleInputChange = (e: any) => {
		e.preventDefault();
		const searchTerm = e.target.value;
		setSearchTerm(searchTerm);
	};

	const handleSearch = (e) => {
		e.preventDefault();
		if (searchTerm.trim() !== '') {
			dispatch(search(searchTerm));
		}
	};

	// Inline style for recent playlist
	const recentPlaylistStyle = {
		display: 'flex',
		gap: '25px',
		marginTop: '4vh',
	} as React.CSSProperties;

	return (
		<>
			<h2>Search for any track</h2>
			<form onSubmit={handleSearch} className='search-form'>
				<input
					type='search'
					placeholder='Artists, songs, or podcasts'
					name='search'
					value={searchTerm}
					onChange={handleInputChange}
					autoComplete='off'
				/>
			</form>

			<div style={{ marginTop: '3vh' }}>
				{searchTerm.trim() === searchTerm && searchTerm.trim() !== '' ? (
					<Fragment>
						{searchTracksSelector &&
							searchTracksSelector?.tracks.map((track, index: number) => (
								<div key={index}>
									{index === 0 ? (
										<div style={{ display: 'flex' }}>
											<h3 style={{ width: '20.5%' }}>Top result</h3>
											<h3 style={{ width: '30%' }}>Songs</h3>
										</div>
									) : (
										''
									)}
									<SearchResults track={track} index={index} />
								</div>
							))}
					</Fragment>
				) : (
					''
				)}
			</div>

			{/* Display recent playlist component */}
			<h3 style={{ marginTop: '14vh' }}>Your recent playlist</h3>
			<div style={recentPlaylistStyle}>
				<RecentPlaylist />
			</div>
		</>
	);
};

export default Search;
