// import React from "react";
import cls from './form.module.scss';
import React, { ChangeEvent, ChangeEventHandler } from 'react';

type PropTypes = {
  label: string;
  stateToChange: string;
  state: { [key: string]: string | Array<string> | number };
  setState: (newState: object) => void;
};
function TextInput({ label, stateToChange, state, setState }: PropTypes) {
  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    const newState = { ...state };
    newState[stateToChange] = e.currentTarget.value;

    setState(newState);
  }

  return (
    <div className={cls.formGroup}>
      <label className={cls.label}>
        {label}
        <input
          className={cls.formControl}
          value={state[stateToChange]}
          onChange={handleChange}
          type="text"
          name={label}
          placeholder={`Enter ${label}`}
        />
      </label>
    </div>
  );
}

export default TextInput;
