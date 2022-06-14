import React from 'react';

type PropTypes = { label: string; checked: boolean; handleChange: () => void };

function Checkbox({ label, checked, handleChange }: PropTypes) {
  return (
    <div>
      <label>
        {label}
        <input
          name={label}
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export { Checkbox };
