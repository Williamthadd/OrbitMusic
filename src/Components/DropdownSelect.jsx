import React, { useState } from "react";

function DropdownSelect({ options, onChange, text, defaultValue }) {
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  const handleSelectChange = (event) => {
    const newValue = event.target.value;
    setSelectedOption(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <select
      className="dropdown-select"
      value={selectedOption}
      onChange={handleSelectChange}
    >
      <option className="dropdown-select-option" value="">
        {text}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default DropdownSelect;
