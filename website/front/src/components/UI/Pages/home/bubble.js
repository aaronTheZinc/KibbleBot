import React from "react";
import "./index.css";
export default ({ text }) => {
  return (
    <div className='bubble-container'>
      <label className='bubble-text'>{text}</label>
    </div>
  );
};
