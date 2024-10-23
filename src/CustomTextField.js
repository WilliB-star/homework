import React from 'react';

function CustomTextField({ label, value, onChange }) {
  return (
    <div className="custom-text-field">
      <label>{label}</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
}

export default CustomTextField;
