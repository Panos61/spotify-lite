import './styles/dashboard.style.scss';
import RecentPlaylist from '../components/RecentPlaylist';
import TopArtists from '../components/TopArtists';
import Categories from '../components/Albums';
import FeaturedPlaylists from '../components/FeaturedPlaylists';
import Library from '../components/Library';

const Dashboard = () => {
	return (
		<>
			<h2 style={{ paddingTop: '2%' }}>Playlists</h2>
			<div style={{ display: 'flex', gap: '2.5rem' }}>
				<Library />
			</div>
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
		</>
	);
};

export default Dashboard;
