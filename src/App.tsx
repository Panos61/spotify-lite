import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
	Route,
	Routes,
	useLocation,
	Location,
	useRoutes,
} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Header from './components/Header';
import Sidenav from './components/Sidebar';
import { setAuth } from './features/auth/actions';
import PrivateRoute from './utils/PrivateRoute';
import SavedTracks from './pages/SavedTracks';
import NotFound from './pages/NotFound';
import Search from './pages/Search';
import { RootState } from './store';

const App: React.FC = () => {
	const dispatch = useDispatch();
	dispatch(setAuth());

	// const currentState = useSelector((state: RootState) => state);

	// const { isAuthenticated } = currentState.authReducer;

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
					<div className='inner-wrapper-content'>
						<Routes>
							{/* <Route element={<PrivateRoute />}> */}
							<Route path='/' element={<Dashboard />} />
							<Route path='/search' element={<Search />} />
							<Route path='/collection/tracks' element={<SavedTracks />} />
							<Route path='/user' element={<Profile />} />
							<Route path='*' element={<NotFound />} />
							{/* </Route> */}
						</Routes>
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
