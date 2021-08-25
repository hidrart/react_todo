import PropTypes from 'prop-types';

const Button = ({name, color, onClick}) => {
	return (
		<button
			onClick={onClick}
			className={`px-2 py-1.5 text-sm text-white ${color} rounded-md `}>
			{name}
		</button>
	);
};

Button.defaultProps = {
	name: 'Button',
	color: 'bg-gray-800',
};

Button.propTypes = {
	name: PropTypes.string,
	color: PropTypes.string,
	onClick: PropTypes.func,
};

export default Button;
