import PropTypes from "prop-types"; // ES6

const Button = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="bg-button hover:bg-gray-700 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50"
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
