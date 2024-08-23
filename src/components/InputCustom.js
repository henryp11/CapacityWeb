import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

function InputCustom(props) {
  const {
    type,
    placeholder,
    name,
    value,
    onChange,
    required,
    textError,
    expresRegular,
    icon,
  } = props;

  const [validated, setValidated] = useState(null);

  const validate = () => {
    if (expresRegular) {
      if (expresRegular.test(value)) {
        console.log("Correct");
        setValidated(true);
      } else {
        console.log("Incorrect");
        setValidated(false);
      }
    }
  };

  return (
    <div className="form_section_container">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onKeyUp={() => {
          validate();
        }}
        onBlur={() => {
          validate();
        }}
        required={required}
      />
      <FontAwesomeIcon icon={icon} className="iconForm" />
      {validated === false && (
        <FontAwesomeIcon icon={faTimesCircle} className="iconFormError" />
      )}
      {validated === true && (
        <FontAwesomeIcon icon={faCheckCircle} className="check iconFormOk" />
      )}
      {validated === false && (
        <p className="form_section_container--error">{textError}</p>
      )}
    </div>
  );
}

export default InputCustom;
