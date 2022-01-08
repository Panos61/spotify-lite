import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { RootState } from '../store';

const refresh = async () => {
	await setTimeout(window.location.reload, 2);
};

const PrivateRoute = () => {
	const currentState = useSelector((state: RootState) => state);
	const { isAuthenticated } = currentState.authReducer;
	let location = useLocation();
	console.warn(isAuthenticated);
	if (!isAuthenticated) {
		refresh();
		return <Navigate to='/login' state={{ from: location }} />;
	}

	// if (!isAuthenticated) {
	// 	refresh();
	// }

	return <Outlet />;
};

export default PrivateRoute;
