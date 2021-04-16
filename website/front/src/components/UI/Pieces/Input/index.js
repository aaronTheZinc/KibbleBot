import React from "react";
import "./index.css";

export const PrimaryInput = ({ onChange, placeholder, value, theme }) => {
  return (

    <input
    style={theme}
      class="primary-input"
      onChange={(e) => onChange(e.target.value.toString())}
      type="text"
      value={value}
      placeholder={placeholder}
    />
  );
};
