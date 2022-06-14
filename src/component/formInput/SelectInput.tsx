import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import cls from './selectInput.module.scss';

type PropsType = {
  label: string;
  options: Array<string>;
  disabled: boolean;
  stateToChange: string;
  state: { [key: string]: string | Array<string> | number };
  setState: (newState: object) => void;
};
function SelectInput({
  label,
  options,
  disabled,
  stateToChange,
  state,
  setState,
}: PropsType) {
  const selectID = uuidv4();
  console.log('selectinp, ', state[stateToChange]);
  let SelectOptions;
  if (options) {
    SelectOptions = options.map((opt) => (
      <option key={uuidv4()} value={`${opt}`}>
        {opt}
      </option>
    ));
  }

  function handleChange(e: React.FormEvent<HTMLSelectElement>) {
    const newState = { ...state };
    newState[stateToChange] = e.currentTarget.value;
    setState(newState);
  }

  return (
    <div style={{ display: 'block', margin: '0.5rem 0' }}>
      <label
        style={{
          display: 'block',
          lineHeight: '1.5',
          textTransform: 'capitalize',
        }}
        htmlFor={selectID}
      >
        {label}
        <select
          className={cls.formControl}
          style={{ display: 'block' }}
          name={label}
          value={state[stateToChange]}
          onChange={handleChange}
          disabled={disabled}
          id={selectID}
        >
          <option value="">--Please choose an option--</option>
          {SelectOptions}
        </select>
      </label>
    </div>
  );
}

export default SelectInput;
