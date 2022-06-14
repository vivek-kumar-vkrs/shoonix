import React from 'react';
import cls from './form.module.scss';

type PropsType = {
  label: string;
  stateToChange: string;
  state: { [key: string]: string | Array<string> | number };
  setState: (newState: object) => void;
};
function TextAreaInput({ label, stateToChange, state, setState }: PropsType) {
  function handleChange(e: React.FormEvent<HTMLTextAreaElement>) {
    const newState = { ...state };
    newState[stateToChange] = e.currentTarget.value;
    setState(newState);
  }

  return (
    <div className={cls.formGroup}>
      <label className={cls.label}>
        {label}
        <textarea
          className={cls.formControl}
          rows={5}
          cols={24}
          value={state[stateToChange]}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default TextAreaInput;
