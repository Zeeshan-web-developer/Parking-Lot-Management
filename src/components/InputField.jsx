const InputField = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      className="border rounded px-4 py-2 w-full max-w-md"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};


export default InputField;