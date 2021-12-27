import DropdownMenu from './DropdownMenu';
import './styles/header.style.scss';

const Header = () => {
	return (
		<header>
			<div className='header-content'>
				<DropdownMenu />
			</div>
		</header>
	);
};

export default Header;
