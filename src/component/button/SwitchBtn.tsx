import React from 'react';
import s from './switchBtn.module.scss';

type PropTypes = {
  switchState: boolean;
  setSwitchState: (arg: boolean) => any;
  //   setSwitchState: React.SetStateAction<Boolean/>
};
function SwitchBtn({ switchState, setSwitchState }: PropTypes) {
  const handleChange = () => {
    setSwitchState(!switchState);
  };
  return (
    <input
      className={s.switchBtn}
      onChange={handleChange}
      type="checkbox"
      value={`${switchState}`}
    />
  );
}

export { SwitchBtn };
