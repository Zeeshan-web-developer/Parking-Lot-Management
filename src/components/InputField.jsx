import PropTypes from "prop-types"; // ES6

const InputField = ({
  value,
  onChange,
  placeholder,
  icon,
  handleButtonClick = () => {},
}) => {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300"
      />
      {value && (
        <button
          type="button"
          onClick={handleButtonClick}
          className="absolute inset-y-0 right-0 flex items-center pr-3"
        >
          {icon ? icon : null}
        </button>
      )}
    </div>
  );
};

InputField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  handleButtonClick: PropTypes.func,
};
export default InputField;
