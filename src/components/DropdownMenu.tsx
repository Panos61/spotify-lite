import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setMe, logout } from '../features/auth/actions';
import { RootState } from '../store';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Logout: React.FC = () => {
	// Call setMe() action to get the user
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setMe());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const currentState = useSelector((state: RootState) => state);
	const { user } = currentState.authReducer;

	// Logout functionality
	const navigate = useNavigate();
	const handleLogout = (e: any) => {
		e.preventDefault();
		dispatch(logout());
		navigate('/login');
	};

	// Menu functionality
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	// User display_name style
	const usernameStyle = {
		color: 'white',
		fontWeight: 'bold',
		fontSize: '13px',
		marginLeft: '6px',
	};

	return (
		<>
			<IconButton onClick={handleClick} size='small' sx={{ ml: 2 }}>
				{user && (
					<>
						<Avatar
							alt={user.display_name}
							src={user.images[0].url}
							sx={{ width: 32, height: 32 }}
						/>
						<div className='logout-name' style={usernameStyle}>
							{user.display_name}
						</div>
					</>
				)}
			</IconButton>

			<Menu
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				PaperProps={{
					elevation: 0,
					sx: {
						overflow: 'visible',
						filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
						mt: 1.5,
						'& .MuiAvatar-root': {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						'&:before': {
							content: '""',
							display: 'block',
							position: 'absolute',
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: 'background.paper',
							transform: 'translateY(-50%) rotate(45deg)',
							zIndex: 0,
						},
					},
				}}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
			>
				<MenuItem>
					<Link to='/user' style={{ textDecoration: 'none', color: 'black' }}>
						Profile
					</Link>
				</MenuItem>
				<MenuItem onClick={handleLogout}>Logout</MenuItem>
			</Menu>
		</>
	);
};

export default Logout;
