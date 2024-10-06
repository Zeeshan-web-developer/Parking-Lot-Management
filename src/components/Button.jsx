const Button = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-900 hover:bg-gray-700 text-white py-2 px-4 rounded "
    >
      {label}
    </button>
  );
};

export default Button;
