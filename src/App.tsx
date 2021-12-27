import './App.scss';
import { useDispatch } from 'react-redux';
import { Route, Routes, useLocation, Location } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Header from './components/Header';
import Sidenav from './components/Sidebar';
import { setAuth } from './features/auth/actions';
import Library from './pages/Library';

const App: React.FC = () => {
	const dispatch = useDispatch();
	dispatch(setAuth());

	let history: Location | string = useLocation();

	return history.pathname === '/login' ? (
		<Login />
	) : (
		<>
			<div className='left-wrapper'>
				<Sidenav />
			</div>

			<div className='right-wrapper'>
				<div className='inner-wrapper'>
					<Header />

					<Routes>
						<Route path='/' element={<Dashboard />} />
						<Route path='/library' element={<Library />} />
					</Routes>
				</div>
			</div>
		</>
	);
};

export default App;
