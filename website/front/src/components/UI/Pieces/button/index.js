import React from "react";
import './index.css'
// Custom Buttons

export const PrimaryButton = ({ title, action, theme }) => {
  const { textColor, backgroundColor, height, width } = theme;
  return (
    <button
    className='primary-button'
      style={{
        color: textColor ? textColor : "#FD6868",
        backgroundColor: backgroundColor? backgroundColor: '#242C37',
        height: height,
        width: width,
        borderRadius: '40px',
        outline: 'none'
      }}
      onClick={() => action()}
    >
      {title}
    </button>
  );
};
