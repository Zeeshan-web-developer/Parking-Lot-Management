const Button = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-900 hover:bg-gray-700 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50"
    >
      {label}
    </button>
  );
};

export default Button;
