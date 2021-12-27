import './styles/dashboard.style.scss';
import RecentPlaylist from '../components/RecentPlaylist';
import TopArtists from '../components/TopArtists';
import Categories from '../components/Albums';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import FeaturedPlaylists from '../components/FeaturedPlaylists';

const Dashboard: React.FC = () => {
	return (
		<>
			<h2 style={{ paddingTop: '30px' }}>Recently Played</h2>
			<div className='dashboard-cards-layout'>
				<RecentPlaylist />
			</div>
			<h2 style={{ marginTop: '40px' }}>Your top artists</h2>
			<div className='dashboard-cards-layout'>
				<TopArtists />
			</div>
			<h2 style={{ marginTop: '40px' }}>New releases</h2>
			<div className='dashboard-cards-layout'>
				<Categories />
			</div>
			<h2 style={{ marginTop: '40px' }}>Editor's picks</h2>
			<div className='dashboard-cards-layout'>
				<FeaturedPlaylists />
			</div>

			<p>.</p>
			<p>.</p>
			<p>.</p>
			<p>.</p>
			<p>.</p>
			<p>.</p>
			<p>.</p>
		</>
	);
};

export default Dashboard;
