import React from "react";

function RadioButton({
  label,
  value,
  selectedValue,
  onChange,
  className,
  image,
}) {
  const isChecked = value === selectedValue;

  const handleRadioChange = () => {
    if (onChange) {
      console.log(value);
      onChange(value);
    }
  };

  return (
    <label
      style={{
        display: "flex",
        flexDirection: "column",
        width: "250px",
        padding: "20px",
      }}
      className={`radio-card flex fd-r ai-c ${
        isChecked ? "radio-card-checked" : ""
      }`}
    >
      {image && (
        <img
          src={image}
          alt=""
          style={{ width: "100px", marginBottom: "15px" }}
        />
      )}
      <input
        type="radio"
        value={value}
        checked={isChecked}
        onChange={handleRadioChange}
        className={className}
      />
      {label}
    </label>
  );
}

export default function RadioGroup({
  options,
  selectedValue,
  onChange,
  className,
  image,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "15px",
        width: "63vw",
        padding: "15px",
      }}
      className="card-container"
    >
      {options.map((option) => (
        <RadioButton
          key={option.value}
          label={option.label}
          value={option.value}
          selectedValue={selectedValue}
          onChange={onChange}
          className={className}
          image={option.image}
        />
      ))}
    </div>
  );
}
