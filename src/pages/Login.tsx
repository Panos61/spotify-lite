import './styles/login.style.scss';
import { loginUrl } from '../utils/spotify_auth';

const Login: React.FC = () => {
	return (
		<div id='login-layout'>
			<img
				key={Date.now()}
				src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
				alt='spotify-logo'
			/>

			<div>
				<h3>Log in with your account.</h3>

				<a href={loginUrl}>LOGIN WITH SPOTIFY</a>
			</div>
		</div>
	);
};

export default Login;
