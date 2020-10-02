import React, { useState } from "react";
import PropTypes from "prop-types";

const Input = ({ name, label, placeholder }) => {
  const [inputValue, setInputvalue] = useState("");

  const [isErrorVisible, setIsErrorVisible] = useState(false);

  const handleChange = ({ target: { value } }) => {
    const regex = /[0-9]+/;
    const specialRegex = /[$]/;
    setInputvalue(value.replace(regex, ""));
    if (specialRegex.test(value)) {
      setIsErrorVisible(true);
    } else {
      setIsErrorVisible(false);
    }
  };

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        id={name}
        data-testid="sample-input"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
      />
      {isErrorVisible && (
        <p>
          <strong>Error:</strong> You can't pass special characters!
        </p>
      )}
    </>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  placeholder: "Default placeholder",
};

export default Input;
