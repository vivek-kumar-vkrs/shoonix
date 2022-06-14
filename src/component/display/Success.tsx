import React from 'react';
import { ScreenCenter } from '../../component/layout';

import cls from './success.module.scss';

type Proptypes = { Svg: React.FC; title: string; msg: string };
function Success({ Svg, title, msg }: Proptypes) {
  return (
    <ScreenCenter>
      <div>
        {Svg ? <Svg /> : <SuccessIcon />}
        {title && <p className={cls.title}>{title}</p>}
        {msg && <p className={cls.msg}>{msg}</p>}
      </div>
    </ScreenCenter>
  );
}

export default Success;

type PropTypes = { size?: string };

function SuccessIcon({ size }: PropTypes) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      width={size ? size : '3rem'}
      height={size ? size : '3rem'}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <g fill="none">
        <path
          d="M8 12l3 3l5-5"
          stroke="#662d91"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 12a9 9 0 1 1 18 0a9 9 0 0 1-18 0z"
          stroke="#662d91"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
