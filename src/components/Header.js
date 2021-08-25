import PropTypes from 'prop-types';

const Header = ({title}) => {
	return (
		<div className='bg-transparent'>
			<header className='flex justify-center py-4 bg-gray-800'>
				<h1 className='text-lg font-bold text-white font-header'>
					{title}
				</h1>
			</header>
		</div>
	);
};

Header.defaultProps = {
	title: 'Task Manager App',
};

Header.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Header;
